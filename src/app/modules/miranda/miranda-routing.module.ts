import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MirandaComponent } from './miranda.component';

const routes: Routes = [{ path: '', component: MirandaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MirandaRoutingModule { }
