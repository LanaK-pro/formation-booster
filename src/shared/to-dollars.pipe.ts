import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDollars',
  standalone: true,
})
export class ToDollarsPipe implements PipeTransform {
  //Convertisseur
  transform(value: number): number {
    let taux = 1.08;
    return value * taux;
  }
}
