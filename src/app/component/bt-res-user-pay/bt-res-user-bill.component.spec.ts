import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTRESUSERBILLComponent } from './bt-res-user-bill.component';

describe('BTRESUSERBILLComponent', () => {
  let component: BTRESUSERBILLComponent;
  let fixture: ComponentFixture<BTRESUSERBILLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTRESUSERBILLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTRESUSERBILLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
