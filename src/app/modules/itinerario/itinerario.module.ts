import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerarioRoutingModule } from './itinerario-routing.module';
import { ItinerarioComponent } from './itinerario.component';


@NgModule({
  declarations: [ItinerarioComponent],
  imports: [
    CommonModule,
    ItinerarioRoutingModule
  ]
})
export class ItinerarioModule { }
