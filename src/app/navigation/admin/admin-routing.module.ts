import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from '../../components/admin-home/admin-home.component';
import { HotelAdminComponent } from '../../components/hotel-admin/hotel-admin.component';
import { HotelDetailAdminComponent } from '../../components/hotel-detail-admin/hotel-detail-admin.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent, pathMatch: 'full'  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
