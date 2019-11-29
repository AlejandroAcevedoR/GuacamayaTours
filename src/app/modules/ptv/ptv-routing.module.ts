import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTVComponent } from './ptv.component';

const routes: Routes = [{ path: '', component: PTVComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PTVRoutingModule { }
