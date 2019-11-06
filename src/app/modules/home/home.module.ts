import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { HotelTempComponent } from '../../components/hotel-temp/hotel-temp.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    HotelTempComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
