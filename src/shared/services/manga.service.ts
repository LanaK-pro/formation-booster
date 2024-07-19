import { Injectable } from '@angular/core';
import { mockMangas } from './mockMangas';

@Injectable({
  providedIn: 'root',
})

//Il fera office de CRUD
export class MangaService {
  constructor() {}

  fetchAll() {
    return mockMangas;
  }
}
