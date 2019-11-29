import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello.component';
import { ToursComponent } from './tours/tours.component';
import { HeadingComponent } from './heading-component/heading.component';
import { TourComponent } from './tour/tour.component';
import { RateComponent } from './rate/rate.component';
import { RatesComponent } from './rates/rates.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import {ToursService} from './tours/tours.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    HelloComponent,
    ToursComponent,
    HeadingComponent,
    TourComponent,
    RateComponent,
    RatesComponent,
    NewTourComponent,
    CartComponent,
    NavComponent,
    TourDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HelloRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    )
  ],
  providers: [ToursService],
  bootstrap: [HelloComponent]
})
export class MainModule { }
