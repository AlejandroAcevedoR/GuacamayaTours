import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelesComponent } from './hoteles.component';
import { HotelComponent } from '../../components/hotel/hotel.component';
import { RoomsComponent } from '../../components/rooms/rooms.component';

@NgModule({
  declarations: [
    HotelesComponent,
    HotelComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    HotelesRoutingModule
  ]
})
export class HotelesModule { }
