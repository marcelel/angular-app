import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: Tour;
  @Output() tourRemovedEmitter = new EventEmitter<Tour>();

  constructor() {
  }

  ngOnInit() {
  }

  makeReservation() {
    if (this.tour.availableAmount > 0) {
      this.tour.availableAmount -= 1;
    }
  }

  returnReservation() {
    if (this.tour.availableAmount < this.tour.maxAmount) {
      this.tour.availableAmount += 1;
    }
  }

  removeTour() {
    this.tourRemovedEmitter.emit(this.tour);
  }

  isAvailable() {
    return this.tour.availableAmount === 0;
  }

  isAnyReserved() {
    return this.tour.availableAmount === this.tour.maxAmount;
  }

  getPlusButtonStyle(): string {
    return this.isAvailable() ? 'hidden' : 'visible';
  }

  getMinusButtonStyle(): string {
    return this.isAnyReserved() ? 'hidden' : 'visible';
  }

  onRateAdded(rate: Rate) {
    this.tour.rates.push(rate);
  }
}
