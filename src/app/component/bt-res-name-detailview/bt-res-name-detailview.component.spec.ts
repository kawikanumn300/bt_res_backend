import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResNameDetailviewComponent } from './bt-res-name-detailview.component';

describe('BtResNameDetailviewComponent', () => {
  let component: BtResNameDetailviewComponent;
  let fixture: ComponentFixture<BtResNameDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResNameDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResNameDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
