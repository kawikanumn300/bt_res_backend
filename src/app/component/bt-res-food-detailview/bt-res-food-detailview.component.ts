import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/assete/dialog';
import { BtResNameList, namelisturl } from 'src/app/service/BtResNameListService';
import { baseUrl, BtResUser, Value } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-bt-res-food-detailview',
  templateUrl: './bt-res-food-detailview.component.html',
  styleUrls: ['./bt-res-food-detailview.component.scss']
})
  export class BtResFoodDetailviewComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
    title = "";
    head = "";
    id: any;
    resname = "";
    phone = "";
    detail = "";
    statusrecord = "";
    data: any;
    usestatus ="";
  
    opentime = [
      "มี", "ไม่มี"
    ];
    read : boolean = true;
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if (!this.id) {
        this.title = "เพิ่มรายการอาหาร";
        this.head = "เพิ่มรายการอาหาร";
        this.resname = "";
        this.phone = "";
        this.detail = "";
        this.statusrecord = "";
        this.read= false;
      } else {
        console.log(this.id);
        this.title = "แก้ใขข้อมูลร้านอาหาร";
        this.head = "แก้ใขข้อมูลร้านอาหาร";
        this.http.get<BtResNameList>(namelisturl + '/' + this.id).subscribe(response => {
          this.data = response;
          console.log(this.data.Value.RES_NAME);
          this.resname = this.data.Value.RES_NAME;
          this.phone = this.data.Value.RES_PHONE;
          this.detail = this.data.Value.RES_DETAIL;
          this.statusrecord = "";
        });
  
      }
    }
  
    async Submit() {
  
      const data1 = {
        RES_NAME: this.resname,
        RECORD_STATUS: "A",
        RES_PHONE: this.phone,
        RES_DETAIL: this.detail,
        RES_STATUS: this.usestatus
      };
      const formData = new FormData();
      formData.append('RES_NAME', this.resname);
      formData.append('RECORD_STATUS', "A");
      formData.append('RES_PHONE', this.phone);
      formData.append('RES_DETAIL', this.detail);
      formData.append('RES_STATUS', this.usestatus);
      // formData.append('USER_PHONE_NUMBER', this.phone);
      // formData.append('USER_EMAIL', this.email);
      // formData.append('USER_RIGHTS', "U");
      console.log(data1);
      if (!this.id) {
  const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
  
        this.http.post(namelisturl, formData,{headers}).subscribe(response => {
          console.log(response);
          this.router.navigate(['/resname-list'])
        },
          error => {
            console.error(error);
          }
        );
      } else {
        const confirm = await Dialogue.Confirm("ยืนยัน",
          `คุณต้องการแก้ข้อมูลนี้หรือไม่?`);
        if (!confirm) {
          return;
        }else{
          this.http.put(namelisturl + '/' + this.id, data1).subscribe(response => {
          console.log(response);
          this.router.navigate(['/resname-list'])
        },
          error => {
            console.error(error);
          }
        );
        }
  
      }
    }
    statuschange() {
      if (this.statusrecord == "เปิดร้าน") {
        this.usestatus = "O"
        console.log(this.usestatus);
      } else {
        this.usestatus = "C"
        console.log(this.usestatus);
      }
    }
  }
  

