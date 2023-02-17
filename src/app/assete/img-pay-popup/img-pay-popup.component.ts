import { BtResPay,payurl} from 'src/app/service/BtResUserPayService';

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-pay-popup',
  templateUrl: './img-pay-popup.component.html',
  styleUrls: ['./img-pay-popup.component.scss']
})
export class ImgPayPopupComponent implements OnInit{
  constructor(public activeModal: NgbActiveModal, private http: HttpClient ,private rounte : Router) {
  }
  img:any;
  imgshow:any
  @Input() fooditem :any;
  ngOnInit(): void {

    this.http.get<BtResPay>(payurl +'/'+ this.fooditem ).subscribe(res => {
    this.img = res.Value
    this.imgshow =this.img.PAY_IMAGE

    })
  }


}
