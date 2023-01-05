import { BtResNameList, namelisturl } from './../../service/BtResNameListService';
import { BtResFoodList } from './../../service/BtResFoodListService';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { custom } from 'devextreme/ui/dialog';
import { Dialogue } from 'src/app/assete/dialog';
import { foodlisturl, Value } from 'src/app/service/BtResFoodListService';



@Component({
  selector: 'app-bt-res-food-listview',
  templateUrl: './bt-res-food-listview.component.html',
  styleUrls: ['./bt-res-food-listview.component.scss']
})
export class BtResFoodListviewComponent implements OnInit{
  data: any;
  resdata:any;
  id_delete:any;
  id_edit:any;

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

    this.http.get<BtResFoodList>(foodlisturl).subscribe(response => {
      this.data = response.Value;
       console.log(this.data);
    });
    this.http.get<BtResNameList>(namelisturl).subscribe(response => {
      this.resdata = response.Value;
       console.log(this.resdata);
    });
  }

  async deletedata(event:any, d:any){
    this.id_delete= d.data.FOOD_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
            `คุณต้องการลบข้อมูลนี้หรือไม่?`);
        if (!confirm) {
            return;
        }

        this.http.delete(foodlisturl+"/"+this.id_delete).subscribe(
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
    console.log(d.data.FOOD_ID);

  }

  editdata(event:any,d:any){
    this.id_edit = d.data.FOOD_ID;
    this.router.navigate(['/food-detail',{id:this.id_edit}]);
  }

  GetStatus(Status: Value) {
    let data1;
    if (Status.USER_STATUS === "A") {
      data1 = "มี";
    } else if (Status.USER_STATUS === "I") { data1 = "หมด"; }
    return data1;
  }
  OnToolbarPrePreparing(e:any) {
    if (e.toolbarOptions.items.length > 0) {
        e.toolbarOptions.items[0].location = "before";
    }e.toolbarOptions.items.unshift(
      {
          template: "btnAdd",
          location: "after"
      }
  );

}
}
