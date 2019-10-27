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
    .then(m => m.ItinerarioModule) }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
