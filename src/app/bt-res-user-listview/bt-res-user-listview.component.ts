import { BtResUser, Value } from './../service/BtResUserService';
import { Component, ViewChild } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-bt-res-user-listview',
  templateUrl: './bt-res-user-listview.component.html',
  styleUrls: ['./bt-res-user-listview.component.scss']
})
export class BtResUserListviewComponent {
  data: any[]=[]; // define a property to hold the data returned by the API
  url : string = "http://192.168.10.144/intern-api/api/";
  constructor(private http: HttpClient) {
    // component constructor code here

    this.http.get<Value>(this.url+'InternArmUser/').subscribe(data => {
      this.data = Object.values(data.USER_ID); // assign the data returned by the API to the property
      console.log(data);
    });
  }

}
