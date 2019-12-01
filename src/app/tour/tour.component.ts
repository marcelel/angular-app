import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @Input() tour: Tour;

  ngOnInit() {
  }
}
