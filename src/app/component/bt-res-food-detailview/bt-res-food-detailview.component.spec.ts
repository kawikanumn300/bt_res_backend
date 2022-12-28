import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResFoodDetailviewComponent } from './bt-res-food-detailview.component';

describe('BtResFoodDetailviewComponent', () => {
  let component: BtResFoodDetailviewComponent;
  let fixture: ComponentFixture<BtResFoodDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResFoodDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResFoodDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
