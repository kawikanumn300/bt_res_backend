import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResUserDetailviewComponent } from './bt-res-user-detailview.component';

describe('BtResUserDetailviewComponent', () => {
  let component: BtResUserDetailviewComponent;
  let fixture: ComponentFixture<BtResUserDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResUserDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResUserDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
