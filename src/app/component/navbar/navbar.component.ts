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

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.lastname = this.route.snapshot.params['lastname'];
    console.log(this.name,this.lastname);
    }


}
