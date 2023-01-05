import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: any;
  lastname :any ;
  constructor(private route: ActivatedRoute,private router:Router) {}

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  ngOnInit(): void {

    const name = sessionStorage.getItem('name');
    const lname = sessionStorage.getItem('lname');
    this.name = name;
    this.lastname = lname;
    if(this.name == null){
      this.router.navigate(["/login"]);
    }
    //console.log(name);
    }

    logout(){
      const confirm =
      sessionStorage.clear();
      this.router.navigate(["/login"]);

    }
}
