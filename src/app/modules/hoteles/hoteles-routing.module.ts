import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelesComponent } from './hoteles.component';
import { HotelComponent } from '../../components/hotel/hotel.component';
import { HotelDetailComponent } from '../../components/hotel-detail/hotel-detail.component';

const routes: Routes = [
  { path: '', component: HotelesComponent,
  children: [
    { path: 'lista', component: HotelComponent },
    { path: '', redirectTo: 'lista', pathMatch: 'all' },
    { path: 'detalle/:id', component: HotelDetailComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelesRoutingModule { }
