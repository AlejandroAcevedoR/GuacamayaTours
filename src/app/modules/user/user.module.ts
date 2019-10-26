import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [UserComponent,
  NavBarComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
