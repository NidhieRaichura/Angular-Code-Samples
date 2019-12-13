import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { ColorCodingComponent } from './color-coding/color-coding.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, C1Component, C2Component, C3Component, ColorCodingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
