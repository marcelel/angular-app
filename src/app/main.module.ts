import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import { ToursComponentComponent } from './tours-component/tours-component.component';
import { HeadingComponentComponent } from './heading-component/heading-component.component';

@NgModule({
  declarations: [
    HelloComponent,
    ToursComponentComponent,
    HeadingComponentComponent
  ],
  imports: [
    BrowserModule,
    HelloRoutingModule
  ],
  providers: [],
  bootstrap: [ToursComponentComponent]
})
export class MainModule { }
