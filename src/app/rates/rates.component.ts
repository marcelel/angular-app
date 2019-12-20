import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  @Input() tour: Tour;
  @Output() rateAddedEmitter = new EventEmitter<Rate>();
  mediumRate: number;
  userCanRate: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.calculateMediumRate();
    this.userCanRate = this.validateUserCanRateTour();
  }

  addRate(event) {
    const rate = {email: this.authService.user.email, value: event};
    this.rateAddedEmitter.emit(rate);
    this.ngOnInit();
  }

  calculateMediumRate() {
    this.mediumRate = 0;
    if (this.tour.rates != null && this.tour.rates.length > 0) {
      let sum = this.tour.rates.map(rate => rate.value).reduce((acc, value) => acc + value);
      this.mediumRate = sum / this.tour.rates.length;
    }
  }

  validateUserCanRateTour() {
    return this.didUserBookTour() && !this.didUserRateTour();
  }

  didUserBookTour() {
    let bookings = this.tour.terms.flatMap(term => term.bookings);
    return bookings.some(booking => booking === this.authService.user.email);
  }

  didUserRateTour() {
    if (this.tour.rates != null) {
      return this.tour.rates.some(rate => rate.email === this.authService.user.email);
    }
    return false;
  }
}
