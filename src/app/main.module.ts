import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HelloRoutingModule} from './hello-routing.module';
import {HelloComponent} from './hello.component';
import {ToursComponent} from './tours/tours.component';
import {HeadingComponent} from './heading-component/heading.component';
import {TourComponent} from './tour/tour.component';
import {RateComponent} from './rate/rate.component';
import {RatesComponent} from './rates/rates.component';
import {NewTourComponent} from './new-tour/new-tour.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CartComponent} from './cart/cart.component';
import {ToursService} from './tours/tours.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {TourDetailsComponent} from './tour-details/tour-details.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AddressFormComponent} from './address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ToursDashboardComponent} from './tours-dashboard/tours-dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {RatingModule} from 'ng-starrating';
import {BarRatingModule} from 'ngx-bar-rating';
import { CountryPipe } from './country.pipe';
import { PriceFromPipe } from './price-from.pipe';
import { PriceToPipe } from './price-to.pipe';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {environment} from "../environments/environment";
import { LoginComponent } from './login/login.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthGuard} from "./auth.guard";
import { RegisterComponent } from './register/register.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HistoryComponent } from './history/history.component';
import {AuthorizationService} from "./authorization.service";
import {AuthService} from "./auth.service";

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
    TourDetailsComponent,
    AddressFormComponent,
    ToursDashboardComponent,
    CountryPipe,
    PriceFromPipe,
    PriceToPipe,
    LoginComponent,
    RegisterComponent,
    HistoryComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, // do obsługi autentykacji
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
      InMemoryDataService, {dataEncapsulation: false, delay: 0}
    ),
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatCarouselModule,
    MatCheckboxModule,
    RatingModule,
    BarRatingModule,
    MatExpansionModule,
    FormsModule,
    MatProgressSpinnerModule,
    AngularFirestoreModule
],
  providers: [ToursService, AuthService, AuthorizationService, AuthGuard],
  bootstrap: [HelloComponent]
})
export class MainModule {
}
