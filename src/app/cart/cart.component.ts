import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tours: Tour[];

  constructor(private cartService: CartService) {
    this.tours = [];
  }

  ngOnInit() {
    this.tours = this.cartService.getTours();
  }
}
