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
  rows = this.breakpointObserver.observe('(max-width: 1200px)').pipe(
    map(({ matches }) => matches ? 1 : 3)
  );

  constructor(private toursService: ToursService, private breakpointObserver: BreakpointObserver) {
    this.tours = [];
  }

  ngOnInit() {
    this.toursService.getTours().subscribe(tours => this.tours = tours);
  }

  onTourRemoved(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
    this.toursService.deleteTour(tour);
  }

  onTourAdded(tour: Tour) {
    this.toursService.addTour(tour).subscribe(newTour => this.tours.push(newTour));
  }
}
