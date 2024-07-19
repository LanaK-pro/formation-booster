import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BonjourService {
  constructor() {}

  saluer(): string {
    return 'Bonjour';
  }
}
