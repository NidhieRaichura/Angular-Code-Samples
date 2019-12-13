import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';

const ADMIN_ROUTES : Routes = [
  {
    path:'', component: AdminComponent,children: [
      {path:'dashboard', component:DashboardComponent},
      {path:'profile', component:ProfileComponent},
      {path:'settings', component:SettingsComponent},
      {path:'', redirectTo:'/admin',pathMatch:'full'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ADMIN_ROUTES)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }