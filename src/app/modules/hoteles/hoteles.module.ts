import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelesRoutingModule } from './hoteles-routing.module';
import { HotelesComponent } from './hoteles.component';


@NgModule({
  declarations: [HotelesComponent],
  imports: [
    CommonModule,
    HotelesRoutingModule
  ]
})
export class HotelesModule { }
