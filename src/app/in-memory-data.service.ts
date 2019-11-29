import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tours = [
      {
        id: 11,
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
        id: 11,
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
        id: 12,
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
    return {tours};
  }

  genId(heroes: Tour[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
