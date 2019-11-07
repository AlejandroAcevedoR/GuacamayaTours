import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HotelAdminComponent } from '../../components/hotel-admin/hotel-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    HotelAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
