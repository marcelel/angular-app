import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursUrl = 'api/tours';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
  }

  getTours() {
    return this.firestore.collection('tours').snapshotChanges();
  }

  getTour(id) {
    return this.firestore.doc('tours/' + id).get();
  }

  addTour(tour: Tour) {
    tour.rates = [];
    this.firestore.collection('tours').add(tour);
  }

  editTour(tour: Tour) {
    let id = tour.id;
    delete tour.id;
    return this.firestore.doc('tours/' + id).update(tour);
  }

  deleteTour(tour: Tour) {
    this.firestore.doc('tours/' + tour.id).delete();
  }
}
