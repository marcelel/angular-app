import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToursService} from '../tours/tours.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  tour: Tour;

  constructor(private route: ActivatedRoute, private toursService: ToursService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.toursService.getTour(id).subscribe(tour => this.tour = tour);
  }
}
