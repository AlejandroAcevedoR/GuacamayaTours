import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MirandaComponent } from './miranda.component';
import { MirandaRoutingModule } from './miranda-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HotelComponent } from '../../components/hotel/hotel.component';
import { HotelMirandaComponent } from './hotel-miranda/hotel-miranda.component';



@NgModule({
  declarations: [MirandaComponent,
    HotelComponent,
    HotelMirandaComponent
  
  ],
  imports: [
    CommonModule,
    MirandaRoutingModule,
    FormsModule,
    ScrollingModule,
   

  ]
})
export class MirandaModule { }
