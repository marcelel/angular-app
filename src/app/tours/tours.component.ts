import {Component, OnInit} from '@angular/core';
import {ToursService} from './tours.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tours-component',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Tour[];
  countries: String[];
  country: '';
  priceFrom: 0;
  priceTo: 0;
  rows = this.breakpointObserver.observe('(max-width: 1200px)').pipe(
    map(({ matches }) => matches ? 1 : 3)
  );

  constructor(private toursService: ToursService, private breakpointObserver: BreakpointObserver) {
    this.tours = [];
    this.countries = [];
  }

  ngOnInit() {
    this.toursService.getTours()
      .subscribe(data => {
        this.tours = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Tour;
        });
        this.initCountries(this.tours)});
  }

  initCountries(tours: Tour[]) {
    this.countries = tours.map(tour => tour.country);
  }

  onTourRemoved(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
    this.toursService.deleteTour(tour);
  }
}
