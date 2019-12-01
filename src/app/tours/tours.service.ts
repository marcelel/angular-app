import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private toursUrl = 'api/tours';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl);
  }

  getTour(id): Observable<Tour> {
    return this.http.get<Tour>(this.toursUrl + '/' + id);
  }

  addTour(tour: Tour): Observable<Tour> {
    tour.rates = [];
    return this.http.post<Tour>(this.toursUrl, tour, this.httpOptions).pipe(
      tap((newTour) => console.log(`added hero w/ id=${newTour.id}`))
      // catchError(err => of('{tour}' as Tour))
    );
  }

  editTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(this.toursUrl, tour, this.httpOptions);

  }

  deleteTour(tour: Tour) {
    return this.http.delete<Tour>(this.toursUrl + '/' + tour.id, this.httpOptions);
  }
}
