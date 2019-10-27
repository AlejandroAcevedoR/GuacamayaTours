import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTVComponent } from './ptv.component';

describe('PTVComponent', () => {
  let component: PTVComponent;
  let fixture: ComponentFixture<PTVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
