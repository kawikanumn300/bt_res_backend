import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResOrderDayComponent } from './bt-res-order-day.component';

describe('BtResOrderDayComponent', () => {
  let component: BtResOrderDayComponent;
  let fixture: ComponentFixture<BtResOrderDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResOrderDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResOrderDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
