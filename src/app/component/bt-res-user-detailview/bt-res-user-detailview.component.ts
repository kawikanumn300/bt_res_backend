import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogue } from 'src/app/assete/dialog';
import { baseUrl, BtResUser, Value } from 'src/app/service/BtResUserService';

@Component({
  selector: 'user-detailview',
  templateUrl: './bt-res-user-detailview.component.html',
  styleUrls: ['./bt-res-user-detailview.component.scss']
})
export class BtResUserDetailviewComponent implements OnInit {

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
  statusrecord: any;
  data: any;
  usestat: any;
  addusestat = ""
  priorities = [{ value: 'ใช้งาน', text: 'ใช้งาน' }, { value: 'ไม่ใช้งาน', text: 'ไม่ใช้งาน' }];
  status = [{ value: 'ผู้ดูแลระบบ', text: 'ผู้ดูแลระบบ' }, { value: 'ผู้ใช้ทั่วไป', text: 'ผู้ใช้ทั่วไป' }
  ];
  read: boolean = true;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.title = "ลงทะเบียนผู้ใช้งาน";
      this.head = "ลงทะเบียนผู้ใช้งาน";
      this.username = "";
      this.password = "";
      this.confirmpassword = "";
      this.firstname = "";
      this.lastname = "";
      this.usestat = "";
      this.phone = "";
      this.email = "";
      this.statusrecord = "";
      this.read = false;
    } else {
      console.log(this.id);
      this.title = "แก้ใขข้อมูลผู้ใช้งาน";
      this.head = "แก้ใขข้อมูลผู้ใช้งาน";
      this.http.get<BtResUser>(baseUrl + '/' + this.id).subscribe(response => {
        this.data = response;
        this.username = this.data.Value.USER_USERNAME;
        this.password = this.data.Value.USER_PASSWORD;
        this.confirmpassword = this.data.Value.USER_PASSWORD;
        this.firstname = this.data.Value.USER_NAME;
        this.lastname = this.data.Value.USER_LASTNAME;
        this.usestat = this.data.Value.USER_STATUS;
        this.phone = this.data.Value.USER_PHONE_NUMBER;
        this.email = this.data.Value.USER_EMAIL;
        this.statusrecord = this.data.Value.USER_RIGHTS;
        //สถานะการใช้งาน
        if (this.usestat === 'A') {
          this.priorities.forEach((item) => {
            if (item.value === 'ใช้งาน') {
              this.usestat = item;
            }
          });
        } else if (this.usestat === 'I') {
          this.priorities.forEach((item) => {
            if (item.value === 'ไม่ใช้งาน') {
              this.usestat = item;
            }
          });
        }
        //สิทธิผู้ใช้งาน
        if (this.statusrecord === 'A') {
          this.status.forEach((item) => {
            if (item.value === 'ผู้ดูแลระบบ') {
              this.statusrecord = item;
            }
          });
        } else if (this.statusrecord === 'U') {
          this.status.forEach((item) => {
            if (item.value === 'ผู้ใช้ทั่วไป') {
              this.statusrecord = item;
            }
          });
        }
      }, error => {
        console.error(error);
      });



    }
  }






  checkPasswordMatch() {
    return this.password === this.confirmpassword;
  }

  async Submit() {

    const data1 = {
      USER_USERNAME: this.username,
      USER_PASSWORD: this.password,
      USER_NAME: this.firstname,
      USER_LASTNAME: this.lastname,
      RECORD_STATUS: "A",
      USER_PHONE_NUMBER: this.phone,
      USER_EMAIL: this.email,
      USER_RIGHTS: this.addusestat,
      USER_STATUS: this.usestatus
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
        this.router.navigate(['/user-listview'])
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
        this.http.put(baseUrl + '/' + this.id, data1).subscribe(response => {
          console.log(response);
          this.router.navigate(['/user-listview'])
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
    if (this.statusrecord.text === "ใช้งาน") {
      this.usestatus = "A"
      console.log(this.usestatus);
    } else {
      this.usestatus = "I"
      console.log(this.usestatus);
    }
  }
  userchange() {
    if (this.usestat.text === "ผู้ดูแลระบบ") {
      this.addusestat = "A"
      console.log(this.addusestat);
    } else {
      this.addusestat = "U"
      console.log(this.addusestat);
    }
  }
}

