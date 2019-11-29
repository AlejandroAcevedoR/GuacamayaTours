import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DestinosRoutingModule } from './destinos-routing.module';
import { DestinosComponent } from './destinos.component';

import { AcordionEstadosComponent } from '../../components/acordion-estados/acordion-estados.component';


@NgModule({
  declarations: [DestinosComponent, AcordionEstadosComponent],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    NgbModule,
  ]
})
export class DestinosModule { }
