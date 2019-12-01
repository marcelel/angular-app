import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToursService} from '../tours/tours.service';
import {CartService} from '../cart/cart.service';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour;

  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private toursService: ToursService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.toursService.getTour(id).subscribe(tour => this.tour = tour);
  }

  book(term: TourTerm) {
    if (this.isReservationAvailable(term)) {
      if (term.reservations == null) {
        term.reservations = [];
      }

      const reservation = {id: uuid(), tourId: term.tourId, tourTermId: term.id, amount: 1}; // todo: remove id
      term.reservations.push(reservation);
      this.toursService.editTour(this.tour).subscribe();
      const cartReservation = {
        id: reservation.id,
        tourId: reservation.tourId,
        tourTermId: reservation.tourTermId,
        amount: reservation.amount,
        price: this.tour.price,
        name: this.tour.name,
        startDate: term.startDate,
        endDate: term.endDate
      };
      this.cartService.addReservation(cartReservation);
    }
  }

  getAvailableTermAmount(term: TourTerm) {
    return term.reservations != null ? term.maxAmount - term.reservations.length : term.maxAmount;
  }

  isReservationAvailable(term: TourTerm) {
    return this.getAvailableTermAmount(term) !== 0;
  }

  removeTour() {
    this.toursService.deleteTour(this.tour).subscribe();
  }

  // isAvailable() {
  //   return this.tour.availableAmount === 0;
  // }

  // isAnyReserved() {
  //   return this.tour.availableAmount === this.tour.maxAmount;
  // }
  //
  // getPlusButtonStyle(): string {
  //   return this.isAvailable() ? 'hidden' : 'visible';
  // }

  onRateAdded(rate: Rate) {
    this.tour.rates.push(rate);
    this.toursService.editTour(this.tour).subscribe();
  }
}
