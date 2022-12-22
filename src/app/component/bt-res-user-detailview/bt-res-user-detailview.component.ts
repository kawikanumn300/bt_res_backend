import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-bt-res-user-detailview',
  templateUrl: './bt-res-user-detailview.component.html',
  styleUrls: ['./bt-res-user-detailview.component.scss']
})
export class BtResUserDetailviewComponent {

  constructor(private http: HttpClient, private router: Router) { }

  status = [
    "ใช้งาน", "ไม่ใช้งาน"
  ];
  username = "";
  password = "";
  confirmpassword = "";
  firstname = "";
  lastname = "";
  recordstatus = "";
  phone = "";
  email = "";
  statusrecord = "";
  checkPasswordMatch() {
    return this.password === this.confirmpassword;
  }

  Submit() {

    const data1 = {
      USER_USERNAME: this.username,
      USER_PASSWORD: this.password,
      USER_NAME: this.firstname,
      USER_LASTNAME: this.lastname,
      RECORD_STATUS: this.recordstatus,
      USER_PHONE_NUMBER: this.phone,
      USER_EMAIL: this.email,
      USER_RIGHTS: "U",
      USER_STATUS: "A"
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
    this.http.post(baseUrl, data1).subscribe( response => {
        console.log(response);
        this.router.navigate(['/user-listview'])
      },
      error => {
        console.error(error);
      }
    );
  }

  passwordComparison = () => this.password;
  checkComparison() {
    return true;
  }

  statuschange() {
    if (this.statusrecord == "ใช้งาน") {
      this.recordstatus = "A"
      console.log(this.recordstatus);
    } else {
      this.recordstatus = "I"
      console.log(this.recordstatus);
    }
  }
}

