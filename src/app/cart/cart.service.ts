import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private tours: Tour[];

  constructor() {
    this.tours = [];
  }

  getTours() {
    return this.tours;
  }

  addTour(tour: Tour) {
    this.tours.push(tour);
  }

  removeTour(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }
}
