import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HotelAdminComponent } from '../../components/hotel-admin/hotel-admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [
    { path: 'HotelAdmin', component: HotelAdminComponent },
    { path: '', redirectTo: 'HotelAdmin', pathMatch: 'all' }
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
