import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cb',
  standalone: true,
})
export class CbPipe implements PipeTransform {
  transform(value: any, num: number = 4): string {
    let stars = `${value.slice(0, num)} ${new Array(17 - 2 * num).join('*')} ${value.slice(-num, value.length)}`;
    return stars;
  }
}
