import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  @Input() rates: Rate[];
  @Output() rateAddedEmitter = new EventEmitter<Rate>();
  newRate: Rate;

  constructor() {
  }

  ngOnInit() {
  }

  setRate(value: number) {
    this.newRate = {value};
  }

  addRate() {
    // this.rates.push(this.newRate);
    this.rateAddedEmitter.emit(this.newRate);
  }
}
