import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  @Input() rates: Rate[];
  @Output() rateAddedEmitter = new EventEmitter<Rate>();
  mediumRate: number;

  constructor() {
  }

  ngOnInit() {
    this.calculateMediumRate();
  }

  addRate(event) {
    const rate = {value: event.newValue};
    // this.rates.push(rate);
    this.rateAddedEmitter.emit(rate);
    this.ngOnInit();
  }

  calculateMediumRate() {
    const sum = this.rates.map(rate => rate.value).reduce((acc, value) => acc + value);
    this.mediumRate = sum / this.rates.length;
    return this.mediumRate;
  }
}
