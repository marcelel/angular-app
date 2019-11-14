import { Component, OnInit } from '@angular/core';
import {max} from 'rxjs/operators';

@Component({
  selector: 'app-tours-component',
  templateUrl: './tours-component.component.html',
  styleUrls: ['./tours-component.component.css']
})
export class ToursComponentComponent implements OnInit {
  tours = [
    {
      name: 'Wycieczka do Turcji',
      country: 'Turcja',
      startDate: new Date(),
      endDate: new Date(),
      price: 2000,
      maxAmount: 10,
      availableAmount: 10,
      description: 'Super wycieczka',
      photoLink: 'https://www.sunfun.pl/images/content/country/turcja__w1160h520-scr_1294f4.jpg'
    },
    {
      name: 'Wycieczka do Grecji',
      country: 'Grecja',
      startDate: new Date(),
      endDate: new Date(),
      price: 2500,
      maxAmount: 5,
      availableAmount: 5,
      description: 'Super wycieczka',
      photoLink: 'https://i.wpimg.pl/O/644x430/d.wpimg.pl/789201725--821815787/santorini.jpg'
    }
  ];

  ngOnInit() {
  }

  minusButton(tour: Tour) {
    if (tour.availableAmount < tour.maxAmount) {
      tour.availableAmount += 1;
    }
  }

  plusButton(tour: Tour) {
    if (tour.availableAmount > 0) {
      tour.availableAmount -= 1;
    }
  }

  getPlusButtonStyle(tour: Tour): string {
    return tour.availableAmount === 0 ? 'hidden' : 'visible';
  }

  getMinusButtonStyle(tour: Tour): string {
    return tour.availableAmount === tour.maxAmount ? 'hidden' : 'visible';
  }
}

interface Tour {

  name: string;
  country: string;
  startDate: Date;
  endDate: Date;
  price: number;
  maxAmount: number;
  availableAmount: number;
  description: string;
  photoLink: string;
}
