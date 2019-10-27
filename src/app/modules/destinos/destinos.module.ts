import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinosComponent } from './destinos.component';


@NgModule({
  declarations: [DestinosComponent],
  imports: [
    CommonModule,
    DestinosRoutingModule
  ]
})
export class DestinosModule { }
