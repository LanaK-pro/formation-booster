import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva',
  standalone: true,
})
export class TvaPipe implements PipeTransform {
  transform(value: number): number {
    let taxe = 1.2;
    return value * taxe;
  }
}
