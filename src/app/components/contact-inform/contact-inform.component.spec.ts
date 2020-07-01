import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformComponent } from './contact-inform.component';

describe('ContactInformComponent', () => {
  let component: ContactInformComponent;
  let fixture: ComponentFixture<ContactInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
