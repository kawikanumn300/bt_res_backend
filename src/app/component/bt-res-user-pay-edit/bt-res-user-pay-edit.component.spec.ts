import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResUserPayEditComponent } from './bt-res-user-pay-edit.component';

describe('BtResUserPayEditComponent', () => {
  let component: BtResUserPayEditComponent;
  let fixture: ComponentFixture<BtResUserPayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResUserPayEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResUserPayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
