import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResFoodListviewComponent } from './bt-res-food-listview.component';

describe('BtResFoodListviewComponent', () => {
  let component: BtResFoodListviewComponent;
  let fixture: ComponentFixture<BtResFoodListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResFoodListviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResFoodListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
