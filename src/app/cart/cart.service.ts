import {Injectable} from '@angular/core';
import {ToursService} from '../tours/tours.service';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private reservations: CartTourReservation[];

  constructor(private toursService: ToursService, private authService: AuthService) {
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

  buy() {
    this.reservations.forEach(reservation => {
      let tour;
      this.toursService.getTour(reservation.tourId).subscribe(data => {
        tour = {
          id: data.id,
          ... data.data()
        }
        let term = tour.terms.find(t => t.startDate.seconds === reservation.startDate.seconds && t.endDate.seconds === reservation.endDate.seconds);
        const index = term.reservations.indexOf(this.authService.user.email);
        if (index > -1) {
          term.reservations.splice(index, 1);
          if (term.bookings == null) {
            term.bookings = [];
          }
          term.bookings.push(this.authService.user.email);
        }
        this.toursService.editTour(tour);
        const resIndex = this.reservations.indexOf(reservation);
        if (resIndex > -1) {
          this.reservations.splice(resIndex, 1);
        }
      });
    })
  }

  private removeReservationFromCart(reservation: CartTourReservation) {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    if (index > -1) {
      this.reservations.splice(index, 1);
    }
  }

  private removeReservationFromTour(reservation: CartTourReservation) {
    let tour;
    this.toursService.getTour(reservation.tourId).subscribe(data => {
      tour = {
        id: data.id,
        ... data.data()
      }
      let term = tour.terms.find(t => t.startDate.seconds === reservation.startDate.seconds && t.endDate.seconds === reservation.endDate.seconds);
      const index = term.reservations.indexOf(this.authService.user.email);
      if (index > -1) {
        term.reservations.splice(index, 1);
      }
      this.toursService.editTour(tour);
    });
  }
}
