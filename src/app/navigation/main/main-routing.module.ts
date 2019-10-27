import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent,
  children: [
    { path: 'Home', loadChildren: () => import('../../modules/home/home.module')
    .then(m => m.HomeModule) },
    { path: '', redirectTo: 'Home', pathMatch: 'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
