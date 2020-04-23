import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleexampleComponent } from './styleexample/styleexample.component';
import { EventexampleComponent } from './eventexample/eventexample.component';
import { TemprefvariableComponent } from './temprefvariable/temprefvariable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifexampleComponent } from './ngifexample/ngifexample.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforexampleComponent } from './ngforexample/ngforexample.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InterpolationComponent,
    PropertyComponent,
    ClassComponent,
    StyleexampleComponent,
    EventexampleComponent,
    TemprefvariableComponent,
    TwowaybindingComponent,
    NgifexampleComponent,
    NgswitchComponent,
    NgforexampleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
