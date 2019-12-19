import {Injectable} from '@angular/core';
import {ToursService} from '../tours/tours.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly reservations: CartTourReservation[];

  constructor(private toursService: ToursService) {
    this.reservations = [];
  }

  getReservations() {
    return this.reservations;
  }

  addReservation(reservation: CartTourReservation) {
    this.reservations.push(reservation);
  }

  removeReservation(reservation: CartTourReservation) {
    this.removeReservationFromCart(reservation);
    this.removeReservationFromTour(reservation);
  }

  private removeReservationFromCart(reservation: CartTourReservation) {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    if (index > -1) {
      this.reservations.splice(index, 1);
    }
  }

  private removeReservationFromTour(reservation: CartTourReservation) {
    let tour;
    this.toursService.getTour(reservation.tourId).subscribe(t => tour = t);
    if (tour != null) {
      const term = tour.terms.find(t => t.id === reservation.tourTermId);
      if (term != null) {
        const index = term.reservations.findIndex(r => r.id === reservation.id);
        if (index > -1) {
          term.reservations.splice(index, 1);
        }
      }
    }
    this.toursService.editTour(tour).subscribe();
  }
}
