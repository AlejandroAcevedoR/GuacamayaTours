import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/main/Home', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./navigation/main/main.module')
  .then(m => m.MainModule) },
  { path: 'admin', loadChildren: () => import('./navigation/admin/admin.module')
  .then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
