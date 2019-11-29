import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMirandaComponent } from './hotel-miranda.component';

describe('HotelMirandaComponent', () => {
  let component: HotelMirandaComponent;
  let fixture: ComponentFixture<HotelMirandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelMirandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelMirandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
