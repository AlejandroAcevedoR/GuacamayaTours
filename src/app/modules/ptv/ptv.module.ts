import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PTVRoutingModule } from './ptv-routing.module';
import { PTVComponent } from './ptv.component';


@NgModule({
  declarations: [PTVComponent],
  imports: [
    CommonModule,
    PTVRoutingModule
  ]
})
export class PTVModule { }
