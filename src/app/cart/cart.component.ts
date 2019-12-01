import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  reservations: CartTourReservation[];

  constructor(private cartService: CartService) {
    this.reservations = [];
  }

  ngOnInit() {
    this.reservations = this.cartService.getReservations();
  }

  getPriceForReservation(reservation: CartTourReservation) {
    return reservation.amount * reservation.price;
  }

  getTotalPrice() {
    return this.reservations != null && this.reservations.length !== 0
      ? this.reservations.map(reservation => this.getPriceForReservation(reservation)).reduce((acc, price) => acc + price)
      : 0;
  }

  removeTourReservation(reservation: CartTourReservation) {
    this.cartService.removeReservation(reservation);
    this.reservations = this.cartService.getReservations();
    this.ngOnInit();
  }
  // todo: filter users reservations
}
