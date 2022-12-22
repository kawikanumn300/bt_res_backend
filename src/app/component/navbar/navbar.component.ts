import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name!: string;
  lastname!:string ;
  constructor(private route: ActivatedRoute) {}

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.lastname = this.route.snapshot.params['lastname'];
    console.log(this.name,this.lastname);
    }


}
