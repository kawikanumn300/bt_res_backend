import { BtResFoodList, foodlisturl } from 'src/app/service/BtResFoodListService';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';
import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent, DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import { Dialogue } from 'src/app/assete/dialog';
import { BtResNameList, namelisturl, Value } from 'src/app/service/BtResNameListService';
import { userbill, BtResUserBill } from 'src/app/service/BtResUserBillService';

@Component({
  selector: 'app-bt-res-order-day',
  templateUrl: './bt-res-order-day.component.html',
  styleUrls: ['./bt-res-order-day.component.scss']
})
export class BtResOrderDayComponent implements OnInit {
  data: any;
  id_delete: any;
  id_edit: any;
  datafromcalendar: any;
  userdata: any;
  resdata: any;
  fooddata: any;
  now: Date = new Date();

  currentValue: Date = new Date();

  minDateValue: Date | null = null;

  maxDateValue: Date | null = null;

  disabledDates: Function | null = null;

  zoomLevels: string[] = [
    'month', 'year', 'decade', 'century',
  ];

  weekDays: { id: number; text: string }[] = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
  ];

  weekNumberRules: string[] = [
    'auto', 'firstDay', 'firstFourDays', 'fullWeek',
  ];

  cellTemplate = 'cell';
  holidays: any = [[1, 0], [4, 6], [25, 11]];


  @ViewChild(DxDataGridComponent)
  dataGrid!: DxDataGridComponent;
  constructor(private http: HttpClient, private router: Router) {
  }


  readonly allowedPageSizes = ['แสดงคอลั่ม ', 5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  ngOnInit(): void {

    this.http.get<BtResUserBill>(userbill).subscribe(response => {
      this.data = response.Value;
      //console.log(this.data);
    });
    this.http.get<BtResUser>(baseUrl).subscribe(response => {
      this.userdata = response.Value;
      // console.log(this.data);
    });
    this.http.get<BtResNameList>(namelisturl).subscribe(response => {
      this.resdata = response.Value;
      // console.log(this.data);
    });
    this.http.get<BtResFoodList>(foodlisturl).subscribe(response => {
      this.fooddata = response.Value;
      // console.log(this.data);
    });
  }

  async deletedata(event: any, d: any) {
    this.id_delete = d.data.RES_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
      `คุณต้องการลบข้อมูลนี้หรือไม่?`);
    if (!confirm) {
      return;
    }

    this.http.delete(namelisturl + "/" + this.id_delete).subscribe(
      _ => {
        custom({
          messageHtml: "ลบข้อมูลเรียบร้อย",
          title: "สำเร็จ",
          buttons: [
            { text: "ปิด" }
          ]
        }).show().then(() => {
          window.location.reload();
          //this.dataGrid.instance.refresh();
        }

        )
      })
    // this.dataGrid.instance.refresh();
    console.log(d.data.RES_ID);

  }
  getDate() {
    console.log(this.now)
  }

  editdata(event: any, d: any) {
    this.id_edit = d.data.RES_ID;
    this.router.navigate(['/resname-detailview', { id: this.id_edit }]);
  }

  GetStatus(Status: Value) {
    let data1;
    if (Status.RES_STATUS === "O") {
      data1 = "เปิด";
    } else if (Status.RES_STATUS === "C") { data1 = "ปิด"; }
    return data1;
  }
  OnToolbarPrePreparing(e: any) {
    if (e.toolbarOptions.items.length > 0) {
      e.toolbarOptions.items[0].location = "before";
    }
    e.toolbarOptions.items.unshift(
      {
        location: "after"
      }
    );

  }
  clickcalendar(event: any) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = event.value.toLocaleDateString('es-CL', options);
    console.log(formattedDate);  // Output: "10-12-22"
    this.datafromcalendar = formattedDate
  }

}
