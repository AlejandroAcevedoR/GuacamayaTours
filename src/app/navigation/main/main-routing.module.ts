import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent,
  children: [
    { path: 'Home', loadChildren: () => import('../../modules/home/home.module')
    .then(m => m.HomeModule) },
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Hoteles', loadChildren: () => import('../../modules/hoteles/hoteles.module')
    .then(m => m.HotelesModule) },
    { path: 'Destinos', loadChildren: () => import('../../modules/destinos/destinos.module')
    .then(m => m.DestinosModule) },
    { path: 'PlaneaTuViaje', loadChildren: () => import('../../modules/ptv/ptv.module')
    .then(m => m.PTVModule) },
    { path: 'Itinerario', loadChildren: () => import('../../modules/itinerario/itinerario.module')
    .then(m => m.ItinerarioModule) },
    { path: 'Miranda', loadChildren: () => import('../../modules/miranda/miranda.module')
    .then(m => m.MirandaModule) },
    { path: 'Lara', loadChildren: () => import('../../modules/lara/lara.module')
    .then(m => m.LaraModule) }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
