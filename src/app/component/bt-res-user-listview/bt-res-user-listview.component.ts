import { custom } from 'devextreme/ui/dialog';

import { BtResUser, Value ,baseUrl , Service } from '../../service/BtResUserService';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient} from '@angular/common/http';
import { Dialogue } from 'src/app/assete/dialog';
import { finalize } from 'rxjs';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-bt-res-user-listview',
  templateUrl: './bt-res-user-listview.component.html',
  styleUrls: ['./bt-res-user-listview.component.scss']
})
export class BtResUserListviewComponent implements OnInit{
  data: any;
  id_delete:any;
  constructor(private http: HttpClient) {


  }


  readonly allowedPageSizes = ['แสดงคอลั่ม ', 5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  ngOnInit(): void {

    this.http.get<BtResUser>(baseUrl).subscribe(response => {
      this.data = response.Value;
       console.log(this.data);
    });
  }

  async deletedata(event:any, d:any){
    this.id_delete= d.data.USER_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
            `คุณต้องการลบข้อมูลนี้หรือไม่?`);
        if (!confirm) {
            return;
        }

        this.http.delete(baseUrl+"/"+this.id_delete).subscribe(
          _=>{
            custom({
              messageHtml: "ลบข้อมูลเรียบร้อย",
            title: "สำเร็จ",
            buttons: [
                { text: "ปิด" }
            ]
        }).show().then(() => {
          this.data.reload();
          }
        )})
    console.log(d.data.USER_ID);
  }
}
