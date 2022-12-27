import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtResNameListComponent } from './bt-res-name-list.component';

describe('BtResNameListComponent', () => {
  let component: BtResNameListComponent;
  let fixture: ComponentFixture<BtResNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtResNameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtResNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
