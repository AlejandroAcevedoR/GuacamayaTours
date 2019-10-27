import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionEstadosComponent } from './acordion-estados.component';

describe('AcordionEstadosComponent', () => {
  let component: AcordionEstadosComponent;
  let fixture: ComponentFixture<AcordionEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordionEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
