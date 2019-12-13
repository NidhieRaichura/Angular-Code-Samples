import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, PublicRoutingModule
  ],
  declarations: []
})
export class PublicModule { }