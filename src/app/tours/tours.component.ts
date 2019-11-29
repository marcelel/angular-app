import {Component, OnInit} from '@angular/core';
import {ToursService} from './tours.service';

@Component({
  selector: 'app-tours-component',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Tour[];

  constructor(private toursService: ToursService) {
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
