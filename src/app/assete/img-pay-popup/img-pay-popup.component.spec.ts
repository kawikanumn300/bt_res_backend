import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPayPopupComponent } from './img-pay-popup.component';

describe('ImgPayPopupComponent', () => {
  let component: ImgPayPopupComponent;
  let fixture: ComponentFixture<ImgPayPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPayPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
