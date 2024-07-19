import { Injectable } from '@angular/core';
import { mockPokemons } from './mockPokemons';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  fetchAll() {
    return mockPokemons;
  }
}
