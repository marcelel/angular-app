import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFrom'
})
export class PriceFromPipe implements PipeTransform {

  transform(tours: Tour[], priceFrom: Number): Tour[] {
    if (!priceFrom) {
      return tours;
    }

    return tours.filter(tour => tour.price >= priceFrom);
  }
}
