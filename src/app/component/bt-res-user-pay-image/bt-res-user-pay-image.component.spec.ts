import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResUserPayImageComponent } from './bt-res-user-pay-image.component';

describe('BtResUserPayImageComponent', () => {
  let component: BtResUserPayImageComponent;
  let fixture: ComponentFixture<BtResUserPayImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResUserPayImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResUserPayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
