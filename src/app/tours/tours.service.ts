import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private tours = [
    {
      name: 'Wycieczka do Turcji',
      country: 'Turcja',
      startDate: new Date(),
      endDate: new Date(),
      price: 2000,
      maxAmount: 10,
      availableAmount: 10,
      description: 'Super wycieczka',
      photoLink: 'https://www.sunfun.pl/images/content/country/turcja__w1160h520-scr_1294f4.jpg',
      rates: []
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
      photoLink: 'https://i.wpimg.pl/O/644x430/d.wpimg.pl/789201725--821815787/santorini.jpg',
      rates: [
        {
          value: 3
        },
        {
          value: 2
        }
      ]
    }
  ];

  constructor() { }

  getProducts(): Tour[] {
    return this.tours;
  }

  // getProduct(): Tour[] {
  //   return this.tours;
  // }

  addProduct(tour: Tour) {
    this.tours.push(tour);
  }

  deleteProduct(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }
}
