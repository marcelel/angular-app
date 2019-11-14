import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HelloRoutingModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class MainModule { }
