import { Component, OnInit } from '@angular/core';
import {ToursService} from "../tours/tours.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  tours: HistoryTour[];

  constructor(private toursService: ToursService, private authService: AuthService) { }

  ngOnInit() {
    this.toursService.getTours()
      .subscribe(data => {
        let tours = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Tour;
        });
        this.tours = this.filterUserBookedTours(tours);
      });
  }

  private filterUserBookedTours(tours: Tour[]): HistoryTour[] {
    let filteredTours = [];
    tours.forEach(tour => {
      tour.terms.forEach(term => {
        if (term.bookings != null) {
          term.bookings.forEach(booking => {
            if (booking === this.authService.user.email) {
              filteredTours.push({
                name: tour.name,
                price: tour.price,
                startDate: term.startDate,
                endDate: term.endDate
              })
            }
          })
        }
      })
    });
    return filteredTours;
  }
}
