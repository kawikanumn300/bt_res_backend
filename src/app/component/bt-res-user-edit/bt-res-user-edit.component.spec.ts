import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResUserEditComponent } from './bt-res-user-edit.component';

describe('BtResUserEditComponent', () => {
  let component: BtResUserEditComponent;
  let fixture: ComponentFixture<BtResUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResUserEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
