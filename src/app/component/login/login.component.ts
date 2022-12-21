import { baseUrl } from './../../service/BtResUserService';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const data = { USER_USERNAME: this.username, USER_PASSWORD: this.password };
    this.http.post(baseUrl+'/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(response => {
      this.value = Object.values(response);
      console.log(this.value[5][2]);
      this.name = this.value[5][0];
      this.lastname = this.value[5][1];
      console.log(this.name);
      console.log(this.lastname);
      if (this.value[0] == true) {
        if (this.value[5][2] == "A") {
          this.router.navigate(['/mainmenu',{name: this.name,lastname:this.lastname}])
        }
        else {
          console.log("user not have permission")
        }

      } else {
        console.log("user or pass error")
      }

    }, error => {
      console.log(error);
    });
    console.log(data);
  }
}
