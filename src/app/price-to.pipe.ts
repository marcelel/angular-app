import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTo'
})
export class PriceToPipe implements PipeTransform {

  transform(tours: Tour[], priceTo: Number): Tour[] {
    if (!priceTo) {
      return tours;
    }

    return tours.filter(tour => tour.price <= priceTo);
  }
}
