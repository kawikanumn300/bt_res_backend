import { baseUrl } from '../../../service/BtResUserService';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { custom } from 'devextreme/ui/dialog';
import { style } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  name: string = "";
  lastname: string = "";
  value: any;
  response: any;
  nameofuser: any;
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const data = { USER_USERNAME: this.username, USER_PASSWORD: this.password };
    this.http.post(baseUrl + '/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(async response => {
      this.value = Object.values(response);

      if (this.value[0] == true) {
        // console.log(this.value[5][2]);
        this.name = this.value[5][0];
        this.lastname = this.value[5][1];
        // console.log(this.name);
        // console.log(this.lastname);
        if (this.value[5][2] == "A") {
          await custom({
            messageHtml: "ยินดีต้อนรับเข้าสู่ระบบ",
            title: "สำเร็จ",
            buttons: [
              {
                text: "ตกลง",

              }
            ]
          }).show().then(() => {

          });
          sessionStorage.setItem('name', this.value[5][0]);
          sessionStorage.setItem('lname', this.value[5][1]);
          this.router.navigate(['/mainmenu', { name: this.name, lastname: this.lastname }])
        }
        else {
          console.log("user not have permission")

        }

      } else {
        await custom({
          messageHtml: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          title: "ผิดพลาด",
          buttons: [
            {
              text: "ตกลง",

            }
          ]
        }).show().then(() => {

        });
        console.log("user or pass error");
        this.username = "";
        this.password = "";
      }

    }, error => {
      console.log(error);
    });
    console.log(data);
  }
}
