import {Component, OnInit} from '@angular/core';
import {ToursService} from './tours.service';

@Component({
  selector: 'app-tours-component',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor(private toursService: ToursService) {
  }

  ngOnInit() {
    this.toursService.getProducts();
  }

  getProducts() {
    return this.toursService.getProducts();
  }

  onTourRemoved(tour: Tour) {
    this.toursService.deleteProduct(tour);
  }

  onTourAdded(tour: Tour) {
    this.toursService.addProduct(tour);
  }
}
