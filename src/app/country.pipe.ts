import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(tours: Tour[], country: String): Tour[] {
    if (!country || country === '') {
      return tours;
    }

    return tours.filter(tour => tour.country === country);
  }
}
