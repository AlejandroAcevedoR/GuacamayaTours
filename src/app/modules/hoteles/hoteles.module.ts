import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelesComponent } from './hoteles.component';
import { HotelComponent } from '../../components/hotel/hotel.component';
import { RoomsComponent } from '../../components/rooms/rooms.component';
import { HotelDetailComponent } from '../../components/hotel-detail/hotel-detail.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    HotelesComponent,
    HotelComponent,
    RoomsComponent,
    HotelDetailComponent
  ],
  imports: [
    CommonModule,
    HotelesRoutingModule,
    FormsModule,
    ScrollingModule
  ]
})
export class HotelesModule { }
