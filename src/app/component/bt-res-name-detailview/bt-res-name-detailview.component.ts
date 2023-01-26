import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/assete/dialog';
import { BtResNameList, namelisturl } from 'src/app/service/BtResNameListService';
import { baseUrl, BtResUser, Value } from 'src/app/service/BtResUserService';

@Component({
  selector: 'resname-detailview',
  templateUrl: './bt-res-name-detailview.component.html',
  styleUrls: ['./bt-res-name-detailview.component.scss']
})
export class BtResNameDetailviewComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {


  }
  title = "";
  head = "";
  id: any;
  resname = "";
  phone = "";
  detail = "";
  statusrecord: any;
  data: any;
  usestatus = "";
  img: any;
  priorities = [{ value: 'เปิดร้าน', text: 'เปิดร้าน' }, { value: 'ปิดร้าน', text: 'ปิดร้าน' }];
  response: any;
  img1: any;
  opentime = [
    "เปิดร้าน", "ปิดร้าน"
  ];
  read: boolean = true;
  selectedOption: any;

  showImage = false;
  imageUrl: any;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.title = "เพิ่มข้อมูลร้านอาหาร";
      this.head = "เพิ่มข้อมูลร้านอาหาร";
      this.resname = "";
      this.phone = "";
      this.detail = "";
      this.statusrecord = "";
      this.read = false;
      this.img = "";
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
        this.statusrecord = this.data.Value.RES_STATUS;
        this.img = this.data.Value.RES_IMAGE;

        if (this.img != null){
          this.imageUrl = 'https://utcc-prc.demotoday.net/bt-order-api'+ this.img
          this.showImage = true
        }
        if (this.statusrecord === 'O') {
          this.priorities.forEach((item) => {
            if (item.value === 'เปิดร้าน') {
              this.statusrecord = item;
            }
          });
        } else if (this.statusrecord === 'C') {
          this.priorities.forEach((item) => {
            if (item.value === 'ปิดร้าน') {
              this.statusrecord = item;
            }
          });
        }
        // this.img=this.data.Value.RES_IMAGE;
        console.log(this.statusrecord);
        // this.img =this.data.Value.RES_IMAGE;
      });

    }

  }

  async Submit() {

    const data1 = {
      RES_NAME: this.resname,
      RECORD_STATUS: "A",
      RES_PHONE: this.phone,
      RES_DETAIL: this.detail,
      RES_STATUS: this.usestatus,
      RES_IMAGE: this.img
    };
    const formData = new FormData();
    formData.append('RES_NAME', this.resname);
    formData.append('RECORD_STATUS', "A");
    formData.append('RES_PHONE', this.phone);
    formData.append('RES_DETAIL', this.detail);
    formData.append('RES_STATUS', this.usestatus);
    formData.append('RES_IMAGE', this.img);
    // formData.append('USER_EMAIL', this.email);
    // formData.append('USER_RIGHTS', "U");
    console.log(data1);
    if (!this.id) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(namelisturl, formData, { headers }).subscribe(response => {
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
      } else {
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
    if (this.statusrecord.text === "เปิดร้าน") {
      this.usestatus = "O"
      console.log(this.usestatus);
    } else {
      this.usestatus = "C"
      console.log(this.usestatus);
    }
  }
  public onUploadFinished = (event: any) => {
    this.response = event;
    this.img = this.response.Value.fileUrl;
    console.log(this.response.Value.fileUrl);
    if (this.img != null){
      this.showImage = true
      this.imageUrl = 'https://utcc-prc.demotoday.net/bt-order-api'+ this.img
    }
  }

}

