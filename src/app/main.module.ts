import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import { ToursComponent } from './tours/tours.component';
import { HeadingComponent } from './heading-component/heading.component';
import { TourComponent } from './tour/tour.component';
import { RateComponent } from './rate/rate.component';
import { RatesComponent } from './rates/rates.component';

@NgModule({
  declarations: [
    HelloComponent,
    ToursComponent,
    HeadingComponent,
    TourComponent,
    RateComponent,
    RatesComponent
  ],
  imports: [
    BrowserModule,
    HelloRoutingModule
  ],
  providers: [],
  bootstrap: [ToursComponent]
})
export class MainModule { }
