import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCarritosComponent } from './mis-carritos.component';

describe('MisCarritosComponent', () => {
  let component: MisCarritosComponent;
  let fixture: ComponentFixture<MisCarritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCarritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCarritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
