import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HotelAdminComponent } from '../../components/hotel-admin/hotel-admin.component';
import { HotelDetailAdminComponent } from 'src/app/components/hotel-detail-admin/hotel-detail-admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    HotelAdminComponent,
    HotelDetailAdminComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
