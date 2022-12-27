import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient} from '@angular/common/http';
import { Dialogue } from 'src/app/assete/dialog';
import { finalize } from 'rxjs';
import DataSource from 'devextreme/data/data_source';
import { BtResNameList, namelisturl ,Value} from 'src/app/service/BtResNameListService';

@Component({
  selector: 'app-bt-res-user-listview',
  templateUrl: './bt-res-name-list.component.html',
  styleUrls: ['./bt-res-name-list.component.scss']
})
export class BtResNameListComponent implements OnInit{
  data: any;
  id_delete:any;
  id_edit:any;
  constructor(private http: HttpClient,private router:Router) {


  }


  readonly allowedPageSizes = ['แสดงคอลั่ม ', 5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  ngOnInit(): void {

    this.http.get<BtResNameList>(namelisturl).subscribe(response => {
      this.data = response.Value;
       console.log(this.data);
    });
  }

  async deletedata(event:any, d:any){
    this.id_delete= d.data.RES_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
            `คุณต้องการลบข้อมูลนี้หรือไม่?`);
        if (!confirm) {
            return;
        }

        this.http.delete(namelisturl+"/"+this.id_delete).subscribe(
          _=>{
            custom({
              messageHtml: "ลบข้อมูลเรียบร้อย",
            title: "สำเร็จ",
            buttons: [
                { text: "ปิด" }
            ]
        }).show().then(() => {
          window.location.reload();
          }
        )})
    console.log(d.data.RES_ID);
  }

  editdata(event:any,d:any){
    this.id_edit = d.data.RES_ID;
    this.router.navigate(['/resname-detailview',{id:this.id_edit}]);
  }

  GetStatus(Status: Value) {
    let data1;
    if (Status.RES_STATUS === "O") {
      data1 = "เปิด";
    } else if (Status.RES_STATUS === "C") { data1 = "ปิด"; }
    return data1;
  }

}
