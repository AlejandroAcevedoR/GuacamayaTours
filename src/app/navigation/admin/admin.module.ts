import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from '../../components/admin-home/admin-home.component';
import { HotelAdminComponent } from '../../components/hotel-admin/hotel-admin.component';
import { HotelDetailAdminComponent } from 'src/app/components/hotel-detail-admin/hotel-detail-admin.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    HotelAdminComponent,
    HotelDetailAdminComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ]
})
export class AdminModule { }
