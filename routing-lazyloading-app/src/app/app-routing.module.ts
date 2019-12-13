import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/public', pathMatch:'full'},
  {path:'public', loadChildren:'./public/public.module#PublicModule'},
  // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports:[
    RouterModule
    ]
})
export class AppRoutingModule { }