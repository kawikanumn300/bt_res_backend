
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/assete/dialog';
import { BtResFoodList, foodlisturl } from 'src/app/service/BtResFoodListService';
import { BtResNameList, namelisturl, Value } from 'src/app/service/BtResNameListService';
import { baseUrl, BtResUser, } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-bt-res-food-detailview',
  templateUrl: './bt-res-food-detailview.component.html',
  styleUrls: ['./bt-res-food-detailview.component.scss']
})
export class BtResFoodDetailviewComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  title = "";
  head = "";
  wqeqq = "1111";
  id: any;
  foodname = "";
  foodnormal = "";
  foodspacial = "";
  statusrecord: any;
  data: any;
  usestatus = "";
  fooddetail = "";
  opentime = [
    "มี", "ไม่มี"
  ];
  resid = "";
  priorities = [{ value: 'มี', text: 'มี' }, { value: 'หมด', text: 'หมด' }];
  defaultResId :any;
  resnameselect: any;
  namelist :any;

  read: boolean = true;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.http.get<BtResNameList>(namelisturl).subscribe(response => {
      this.namelist = response;
      this.resnameselect = this.namelist.Value;
      this.defaultResId = this.resnameselect.RES_ID;
      //this.resnameselect = response.Value.map((item: { RES_NAME: any; }) => item.RES_NAME);
      console.log(this.resnameselect)
    });
    if (!this.id) {
      this.title = "เพิ่มรายการอาหาร";
      this.head = "เพิ่มรายการอาหาร";
      this.foodname = "";
      this.foodnormal = "";
      this.foodspacial = "";
      this.statusrecord = "";
      this.resid = "";
      this.fooddetail = "";
      this.read = false;
    } else {
      console.log(this.id);
      this.title = "แก้ใขข้อมูลรายการอาหาร";
      this.head = "แก้ใขข้อมูลรายการอาหาร";
      this.http.get<BtResFoodList>(foodlisturl + '/' + this.id).subscribe(response => {
        this.data = response;
        console.log(this.data.Value.FOOD_NAME);
        this.foodname = this.data.Value.FOOD_NAME;
        this.foodnormal = this.data.Value.FOOD_NORMAL;
        this.foodspacial = this.data.Value.FOOD_SPECIAL;
        this.resid = this.data.Value.RES_ID;
        this.fooddetail = this.data.Value.FOOD_NOTE;
        this.statusrecord = this.data.Value.USER_STATUS;

        this.defaultResId= this.resid;

        if (this.statusrecord === 'A') {
          this.priorities.forEach((item) => {
            if (item.value === 'มี') {
              this.statusrecord = item;
            }
          });
        } else if (this.statusrecord === 'I') {
          this.priorities.forEach((item) => {
            if (item.value === 'หมด') {
              this.statusrecord = item;
            }
          });
        }
      });

    }
  }

  async Submit() {

    const data1 = {
      FOOD_NAME: this.foodname,
      RECORD_STATUS: "A",
      FOOD_NORMAL: this.foodnormal,
      FOOD_SPECIAL: this.foodspacial,
      FOOD_NOTE: this.fooddetail,
      USER_STATUS: this.usestatus,
      RES_ID: this.resid,


    };
    const formData = new FormData();
    formData.append('FOOD_NAME', this.foodname);
    formData.append('FOOD_NORMAL', this.foodnormal);
    formData.append('FOOD_SPECIAL', this.foodspacial);
    formData.append('FOOD_NOTE', this.fooddetail);
    formData.append('USER_STATUS', this.usestatus);
    formData.append('RECORD_STATUS', "A");
    formData.append('RES_ID', this.resid);
    // formData.append('USER_EMAIL', this.email);
    // formData.append('USER_RIGHTS', "U");
    console.log(data1);
    if (!this.id) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');

      this.http.post(foodlisturl, formData, { headers }).subscribe(response => {
        console.log(response);
        this.router.navigate(['/food-list'])
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
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        this.http.put(foodlisturl + '/' + this.id, data1).subscribe(response => {
          console.log(response);
          this.router.navigate(['/food-list'])
        },
          error => {
            console.error(error);
          }
        );
      }

    }
  }
  statuschange() {
    if (this.statusrecord.text === "มี") {
      this.usestatus = "A"
      console.log(this.usestatus);
    } else {
      this.usestatus = "I"
      console.log(this.usestatus);
    }
  }
  onSelectionChanged(event: any) {
    this.resid = event.value;
    console.log(this.resid);
  }
}


