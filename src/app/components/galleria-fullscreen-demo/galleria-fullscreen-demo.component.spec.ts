import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaFullscreenDemoComponent } from './galleria-fullscreen-demo.component';

describe('GalleriaFullscreenDemoComponent', () => {
  let component: GalleriaFullscreenDemoComponent;
  let fixture: ComponentFixture<GalleriaFullscreenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaFullscreenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaFullscreenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
