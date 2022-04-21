import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    let price = value ? '$'.concat(value.toString()) : '$0';
    return price;
  }
}
