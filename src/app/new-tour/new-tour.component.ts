import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToursService} from "../tours/tours.service";

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  modelForm: FormGroup;
  @Output() newTourEmitter = new EventEmitter<Tour>();

  constructor(private formBuilder: FormBuilder, private toursService: ToursService) {
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      mainPhotoLink: new FormControl('', [Validators.required]),
      photoLink1: new FormControl('', [Validators.required]),
      photoLink2: new FormControl('', [Validators.required]),
      photoLink3: new FormControl('', [Validators.required]),
      photoLink4: new FormControl('', [Validators.required]),
      startDate: new FormControl(new Date(), [Validators.required]),
      endDate: new FormControl(new Date(), [Validators.required]),
      maxAmount: new FormControl(null, [Validators.required]),
    });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.modelForm.controls[controlName].hasError(errorName);
  }

  onSubmit(form) {
    let tour = {
      name: form.value.name,
      country: form.value.country,
      price: form.value.price,
      description: form.value.description,
      mainPhotoLink: form.value.mainPhotoLink,
      photoLinks: [
        form.value.photoLink1,
        form.value.photoLink2,
        form.value.photoLink3,
        form.value.photoLink4
      ],
      rates: [],
      terms: [{
        startDate: form.value.startDate,
        endDate: form.value.endDate,
        maxAmount: form.value.maxAmount,
        reservations: [],
        bookings: []
      }]
    };
    this.toursService.addTour(tour);
  };
}
