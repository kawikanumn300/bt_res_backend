
import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';
import { BtResUser, Value, baseUrl, } from '../../service/BtResUserService';
import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dialogue } from 'src/app/assete/dialog';

@Component({
  selector: 'app-bt-res-user-listview',
  templateUrl: './bt-res-user-listview.component.html',
  styleUrls: ['./bt-res-user-listview.component.scss']
})
export class BtResUserListviewComponent implements OnInit {

  data: any;
  id_delete: any;
  id_edit: any;
  status = "";
  ishidden = false;
  constructor(private http: HttpClient, private router: Router) {


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

      if (this.data.USER_RIGHTS === "U") {
        this.ishidden = true;

      }
    });


  }
  GetStatus(Status: Value) {
    let data1;
    if (Status.USER_STATUS === "A") {
      data1 = "ใช้งาน";
    } else if (Status.USER_STATUS === "I") { data1 = "ไม่ใช้งาน"; }
    return data1;
  }
  GetRights(Status: Value) {
    let data;
    if (Status.USER_RIGHTS === "A") {
      data = "ผู้ดูแลระบบ";
    } else if (Status.USER_RIGHTS === "U") { data = "ผู้ใช้ทั่วไป"; }
    return data;
  }

  async deletedata(event: any, d: any) {
    this.id_delete = d.data.USER_ID;
    const confirm = await Dialogue.Confirm("ยืนยัน",
      `คุณต้องการลบข้อมูลนี้หรือไม่?`);
    if (!confirm) {
      return;
    }
    this.http.delete(baseUrl + "/" + this.id_delete)
      .subscribe(
        _ => {
          custom({
            messageHtml: "ลบข้อมูลเรียบร้อย",
            title: "สำเร็จ",
            buttons: [
              {
                text: "ปิด",

              }
            ]
          }).show().then(() => {
            window.location.reload();
          });
        });

    console.log(d.data.USER_ID);
  }

  editdata(event: any, d: any) {
    this.id_edit = d.data.USER_ID;
    this.router.navigate(['/user-detailview', { id: this.id_edit }]);
  }
  reload() {
    window.location.reload();
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
