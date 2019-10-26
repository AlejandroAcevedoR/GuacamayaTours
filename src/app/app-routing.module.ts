import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user-view', loadChildren: () => import('./modules/user/user.module')
  .then(m => m.UserModule) },
  { path: 'admin-view', loadChildren: () => import('./modules/admin/admin.module')
  .then(m => m.AdminModule) },
  {
    path: '',
    redirectTo: 'user-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
