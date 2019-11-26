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
    this.tours = this.toursService.getProducts();
  }

  onTourRemoved(tour: Tour) {
    this.toursService.deleteProduct(tour);
    const index = this.tours.indexOf(tour);
    if (index > -1) {
      this.tours.splice(index, 1);
    }
  }

  onTourAdded(tour: Tour) {
    this.toursService.addProduct(tour);
    this.tours.push(tour);
  }
}
