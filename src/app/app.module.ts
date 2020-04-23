import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleexampleComponent } from './styleexample/styleexample.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InterpolationComponent,
    PropertyComponent,
    ClassComponent,
    StyleexampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
