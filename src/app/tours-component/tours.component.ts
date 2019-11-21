import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tours-component',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

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

  ngOnInit() {
  }

  onTourRemoved(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }
}
