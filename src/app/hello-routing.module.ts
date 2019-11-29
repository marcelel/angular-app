import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToursComponent} from './tours/tours.component';
import {CartComponent} from './cart/cart.component';
import {TourDetailsComponent} from './tour-details/tour-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/tours', pathMatch: 'full'},
  { path: 'tours', component: ToursComponent},
  { path: 'tours/:id', component: TourDetailsComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }

//todo: filtering - https://angular.io/guide/pipes
