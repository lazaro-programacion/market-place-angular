import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuppliersComponent } from './show-suppliers.component';

describe('ShowSuppliersComponent', () => {
  let component: ShowSuppliersComponent;
  let fixture: ComponentFixture<ShowSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
