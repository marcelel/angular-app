import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input() rate: Rate;

  constructor() { }

  ngOnInit() {
  }

}
