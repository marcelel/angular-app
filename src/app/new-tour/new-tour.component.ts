import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  modelForm: FormGroup;
  @Output() newTourEmitter = new EventEmitter<Tour>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      name: '',
      country: '',
      startDate: '',
      endDate: '',
      price: '',
      maxAmount: '',
      availableAmount: '',
      description: '',
      photoLink: ''
    });
  }

  onSubmit(form) {
    this.newTourEmitter.emit(form.value);
  };
}
