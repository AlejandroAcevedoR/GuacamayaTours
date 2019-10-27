import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarioComponent } from './itinerario.component';

const routes: Routes = [{ path: '', component: ItinerarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerarioRoutingModule { }
