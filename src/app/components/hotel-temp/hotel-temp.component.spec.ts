import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTempComponent } from './hotel-temp.component';

describe('HotelTempComponent', () => {
  let component: HotelTempComponent;
  let fixture: ComponentFixture<HotelTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
