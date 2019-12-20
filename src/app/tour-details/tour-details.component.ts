import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToursService} from '../tours/tours.service';
import {CartService} from '../cart/cart.service';
import {v4 as uuid} from 'uuid';
import {AuthService} from "../auth.service";
import {error} from "util";
import {map} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour;
  isAdmin: boolean;

  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private toursService: ToursService,
              private authService: AuthService,
              private firestore: AngularFirestore) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.toursService.getTour(id).subscribe(data => this.tour = {
      id: data.id,
      ... data.data()
    });
    this.checkIsAdmin();
  }

  book(term: TourTerm) {
    if (this.isReservationAvailable(term)) {
      const cartReservation = {
        tourId: this.tour.id,
        price: this.tour.price,
        name: this.tour.name,
        startDate: term.startDate,
        endDate: term.endDate
      };
      this.cartService.addReservation(cartReservation);
      term.reservations.push(this.authService.user.email);
      let id = this.tour.id;
      this.toursService.editTour(this.tour);
      this.toursService.getTour(id).subscribe(data => this.tour = {
        id: data.id,
        ... data.data()
      });
    }
  }

  getAvailableTermAmount(term: TourTerm) {
    let amount = term.maxAmount;
    if (term.reservations != null) {
      amount -= term.reservations.length;
    }
    if (term.bookings != null) {
      amount -= term.bookings.length;
    }
    return amount;
  }

  isReservationAvailable(term: TourTerm) {
    return this.getAvailableTermAmount(term) !== 0;
  }

  removeTour() {
    this.toursService.deleteTour(this.tour).subscribe();
  }

  onRateAdded(rate: Rate) {
    this.tour.rates.push(rate);
    this.toursService.editTour(this.tour);
  }

  checkIsAdmin() {
    this.authService.authState$.pipe(map(state => {
        if (state !== null) {
          this.firestore.doc('permissions/' + state.email)
            .get()
            .subscribe(value => this.isAdmin = value.get("role") === "ADMIN");
        }
        this.isAdmin = false;
      }
      )
    ).subscribe(value => value);
  }
}
