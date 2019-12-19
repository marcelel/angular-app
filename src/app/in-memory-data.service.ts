import {Injectable} from '@angular/core';
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
        price: 3000,
        startDate: new Date(),
        endDate: new Date(),
        maxAmount: 10,
        availableAmount: 10,
        description: 'Super wycieczka',
        mainPhotoLink: 'https://www.funclub.pl/wp-content/uploads/2019/10/istambul_turcja_funclub.jpg',
        photoLinks: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KTl9ss6QAmE7iIxDoY6OHmXepvkzaUX2naiKnqfoifqTH4xU&s',
          'https://cyfrowa.rp.pl/wp-content/uploads/2019/07/turcja.jpg',
          'https://fajnepodroze.pl/wp-content/uploads/2019/07/Turcja.jpg',
          'https://podroze.smcloud.net/t/image/t/133148/turcja-kapadocja_336578.jpg'
        ],
        rates: [
          {
            value: 3
          },
          {
            value: 2
          }
        ],
        terms: [
          {
            id: 1,
            tourId: 12,
            startDate: new Date(2019, 10, 23),
            endDate: new Date(2019, 10, 30),
            maxAmount: 7,
            availableAmount: 7
          },
          {
            id: 2,
            tourId: 12,
            startDate: new Date(2019, 10, 3),
            endDate: new Date(2019, 10, 10),
            maxAmount: 5,
            availableAmount: 5
          }
        ]
      },
      {
        id: 12,
        name: 'Wycieczka do Grecji',
        country: 'Grecja',
        price: 2500,
        startDate: new Date(),
        endDate: new Date(),
        maxAmount: 5,
        availableAmount: 5,
        description: 'Super wycieczka',
        mainPhotoLink: 'https://i.wpimg.pl/O/644x430/d.wpimg.pl/789201725--821815787/santorini.jpg',
        photoLinks: [
          'https://podroze.smcloud.net/t/photos/t/144732/zatoka-wraku_1139626.jpg',
          'https://www.sunfun.pl/images/content/country/grecja__w1160h520-scr_1294f4.jpg',
          'https://i.wpimg.pl/O/644x430/d.wpimg.pl/789201725--821815787/santorini.jpg',
          'https://i.content4travel.com/cms/img/u/kraj/1/grecja_0.jpg?version=87'
        ],
        rates: [
          {
            value: 3
          },
          {
            value: 2
          }
        ],
        terms: [
          {
            id: 1,
            tourId: 12,
            startDate: new Date(2019, 10, 23),
            endDate: new Date(2019, 10, 30),
            maxAmount: 7,
            availableAmount: 7
          },
          {
            id: 2,
            tourId: 12,
            startDate: new Date(2019, 10, 3),
            endDate: new Date(2019, 10, 10),
            maxAmount: 5,
            availableAmount: 5
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
