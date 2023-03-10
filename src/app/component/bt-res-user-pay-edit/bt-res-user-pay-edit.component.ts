import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/assete/dialog';
import { baseUrl, BtResUser, Value } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-bt-res-user-pay-edit',
  templateUrl: './bt-res-user-pay-edit.component.html',
  styleUrls: ['./bt-res-user-pay-edit.component.scss']
})
export class BtResUserPayEditComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  title = "";
  head = "";
  id: any;
  username = "";
  password = "";
  confirmpassword = "";
  firstname = "";
  lastname = "";
  usestatus = "";
  phone = "";
  email = "";
  statusrecord = "";
  userbalance :any;
  data: any;
  priorities = ['ใช้งาน','ไม่ใช้งาน',];
  status = [
    'ชำระเรียบร้อย','ยังไม่ได้ชำระ'
  ];
  read : boolean = true;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      // this.title = "สถานะการชำระเงิน";
      // this.head = "สถานะการชำระเงิน";
      this.username = "";
      this.password = "";
      this.confirmpassword = "";
      this.firstname = "";
      this.lastname = "";
      this.usestatus = "";
      this.phone = "";
      this.email = "";
      this.statusrecord = "";
      this.read= false;
    } else {
      console.log(this.id);
      this.title = "แก้ไขสถานะการชำระเงิน";
      this.head = "ข้อมูลการชำระเงิน";
      this.http.get<BtResUser>(baseUrl + '/' + this.id).subscribe(response => {
        this.data = response;
        console.log(this.data.Value.USER_USERNAME);
        this.username = this.data.Value.USER_USERNAME;
        this.password = this.data.Value.USER_PASSWORD;
        this.confirmpassword = this.data.Value.USER_PASSWORD;
        this.firstname = this.data.Value.USER_NAME;
        this.lastname = this.data.Value.USER_LASTNAME;
        this.usestatus = this.data.Value.USER_STATUS;
        this.phone = this.data.Value.USER_PHONE_NUMBER;
        this.email = this.data.Value.USER_EMAIL;
        this.statusrecord = this.data.Value.USER_RIGHTS;
        this.userbalance = this.data.Value.USER_BALANCE;
      });

    }
  }
  checkPasswordMatch() {
    return this.password === this.confirmpassword;
  }
  async Submit() {
    const data1 = {
      USER_BALANCE: this.userbalance
    };
    // const formData = new FormData();
    // formData.append('USER_USERNAME', this.username);
    // formData.append('USER_PASSWORD', this.password);
    // formData.append('USER_NAME', this.firstname);
    // formData.append('USER_LASTNAME', this.lastname);
    // formData.append('RECORD_STATUS', this.recordstatus);
    // formData.append('USER_PHONE_NUMBER', this.phone);
    // formData.append('USER_EMAIL', this.email);
    // formData.append('USER_RIGHTS', "U");
    console.log(data1);
    if (!this.id) {

      this.http.post(baseUrl, data1).subscribe(response => {
        console.log(response);
        this.router.navigate(['/bt-user-bill'])
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
        this.http.put(baseUrl + '/' + this.id, data1).subscribe(response => {
        console.log(response);
        this.router.navigate(['/bt-user-bill'])
      },
        error => {
          console.error(error);
        }
      );
      }

    }

  }

  passwordComparison = () => this.password;
  checkComparison() {
    return true;
  }

  statuschange() {
    if (this.statusrecord == "ใช้งาน") {
      this.usestatus = "A"
      console.log(this.usestatus);
    } else {
      this.usestatus = "I"
      console.log(this.usestatus);
    }
  }

}

