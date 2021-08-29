import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePersonListComponent } from './sale-person-list.component';

describe('SalePersonListComponent', () => {
  let component: SalePersonListComponent;
  let fixture: ComponentFixture<SalePersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalePersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
