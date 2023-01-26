import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxDataGridComponent, DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient} from '@angular/common/http';
import { Dialogue } from 'src/app/assete/dialog';
import { finalize } from 'rxjs';
import DataSource from 'devextreme/data/data_source';

import { userbill,BtResUserBill ,Value} from 'src/app/service/BtResUserBillService';
import { baseUrl, BtResUser } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-bt-res-user-bill',
  templateUrl: './bt-res-user-bill.component.html',
  styleUrls: ['./bt-res-user-bill.component.scss']
})
export class BTRESUSERBILLComponent implements OnInit{
  data: any;
  id_delete:any;
  id_edit:any;
  id_image:any;
  userdata:any;

  @ViewChild(DxDataGridComponent)
  dataGrid!: DxDataGridComponent;
  constructor(private http: HttpClient,private router:Router) {


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
      //  console.log(this.data);
    });
    this.http.get<BtResUser>(baseUrl).subscribe(response => {
      this.userdata = response.Value;
      //  console.log(this.data);
    });
  }

  async deletedata(event:any, d:any){
    this.id_delete= d.data.BILL_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
            `คุณต้องการลบข้อมูลนี้หรือไม่?`);
        if (!confirm) {
            return;
        }

        this.http.delete(userbill+"/"+this.id_delete).subscribe(
          _=>{
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

        )})
       // this.dataGrid.instance.refresh();
    console.log(d.data.BILL_ID);

  }

  editdata(event:any,d:any){
    this.id_edit = d.data.BILL_ID;
    this.router.navigate(['/bt-pay-edit',{id:this.id_edit}]);
  }
  editimage(event:any,d:any){
    this.id_image = d.data.BILL_ID;
    this.router.navigate(['/bt-pay-image',{id:this.id_image}]);
  }

  // GetStatus(Status: Value) {
  //   let data1;
  //   if (Status.RES_STATUS === "O") {
  //     data1 = "เปิด";
  //   } else if (Status.RES_STATUS === "C") { data1 = "ปิด"; }
  //   return data1;
  // }
  OnToolbarPrePreparing(e:any) {
    if (e.toolbarOptions.items.length > 0) {
        e.toolbarOptions.items[0].location = "before";
    }

}
}
