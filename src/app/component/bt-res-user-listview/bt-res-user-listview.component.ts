
import { BtResUser, Value ,baseUrl} from '../../service/BtResUserService';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-bt-res-user-listview',
  templateUrl: './bt-res-user-listview.component.html',
  styleUrls: ['./bt-res-user-listview.component.scss']
})
export class BtResUserListviewComponent implements OnInit{
  data: any[]=[];

  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {

    this.http.get<any>(baseUrl).subscribe(response => {
      this.data = response.Value;
       console.log(this.data);
    });
  }


}
