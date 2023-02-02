import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-pay-popup',
  templateUrl: './img-pay-popup.component.html',
  styleUrls: ['./img-pay-popup.component.scss']
})
export class ImgPayPopupComponent {
  constructor(public activeModal: NgbActiveModal, private http: HttpClient ,private rounte : Router) {

  }
}
