import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NavComponent } from './nav/nav.component';

const PUBLIC_ROUTES: Routes = [
  {
    path: '', component: PublicComponent, children:
      [{ path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }]
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(PUBLIC_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [PublicComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent]
})
export class PublicRoutingModule { }