import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToursComponent} from './tours/tours.component';
import {CartComponent} from './cart/cart.component';
import {TourDetailsComponent} from './tour-details/tour-details.component';
import {NewTourComponent} from './new-tour/new-tour.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {RegisterComponent} from "./register/register.component";
import {HistoryComponent} from "./history/history.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tours', canActivate:[AuthGuard], component: ToursComponent},
  { path: 'tours/:id', canActivate:[AuthGuard], component: TourDetailsComponent},
  { path: 'new-tour', canActivate:[AuthGuard], component: NewTourComponent},
  { path: 'cart', canActivate:[AuthGuard], component: CartComponent},
  { path: 'history', canActivate:[AuthGuard], component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }

//todo: filtering - https://angular.io/guide/pipes
