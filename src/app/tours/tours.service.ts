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

  addTour(tour: Tour): Observable<Tour> {
    tour.rates = [];
    return this.http.post<Tour>(this.toursUrl, tour, this.httpOptions).pipe(
      tap((newTour) => console.log(`added hero w/ id=${newTour.id}`))
      // catchError(err => of('{tour}' as Tour))
    );
  }

  editTour(tour: Tour): Observable<any> {
    return this.http.put<Tour>(this.toursUrl, tour, this.httpOptions);
  }

  deleteTour(tour: Tour): Observable<Tour> {
    return this.http.delete<Tour>(this.toursUrl + '/' + tour.id, this.httpOptions);
  }
}
