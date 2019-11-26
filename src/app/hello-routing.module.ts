import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToursComponent} from './tours/tours.component';


const routes: Routes = [
  { path: '', redirectTo: '/tours', pathMatch: 'full'},
  { path: 'tours', component: ToursComponent}
  // { path}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }

//todo: filtering - https://angular.io/guide/pipes
