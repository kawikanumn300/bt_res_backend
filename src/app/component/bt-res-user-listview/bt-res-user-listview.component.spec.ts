import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResUserListviewComponent } from './bt-res-user-listview.component';

describe('BtResUserListviewComponent', () => {
  let component: BtResUserListviewComponent;
  let fixture: ComponentFixture<BtResUserListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResUserListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResUserListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
