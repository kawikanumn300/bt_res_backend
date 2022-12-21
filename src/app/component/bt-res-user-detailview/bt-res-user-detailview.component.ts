import { Component } from '@angular/core';

@Component({
  selector: 'app-bt-res-user-detailview',
  templateUrl: './bt-res-user-detailview.component.html',
  styleUrls: ['./bt-res-user-detailview.component.scss']
})
export class BtResUserDetailviewComponent {
  countries: string[] = [];
  username :string ="";

  Submit(){
    const data = this.username ;
    console.log(data);
  }
}

