import { Component } from '@angular/core';

@Component({
  selector: 'user-edit',
  templateUrl: './bt-res-user-edit.component.html',
  styleUrls: ['./bt-res-user-edit.component.scss']
})
export class BtResUserEditComponent {

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
