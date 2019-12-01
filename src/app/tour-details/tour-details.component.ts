import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToursService} from '../tours/tours.service';
import {CartService} from '../cart/cart.service';

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

  // makeReservation() {
  //   if (this.tour.availableAmount > 0) {
  //     this.tour.availableAmount -= 1;
  //   }
  //
  //   this.cartService.addTour(this.tour);
  // }

  // returnReservation() {
  //   if (this.tour.availableAmount < this.tour.maxAmount) {
  //     this.tour.availableAmount += 1;
  //   }
  //
  //   this.cartService.removeTour(this.tour);
  // }

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
