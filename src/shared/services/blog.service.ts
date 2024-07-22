import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iblog } from '../interface/iblog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  //URL de l'api
  url = 'https://jsonplaceholder.typicode.com/posts';

  //Ici tous les fonctions de CRUD
  constructor(private http: HttpClient) {}
  fetchAll() {
    return this.http.get<Iblog[]>(this.url);
  }
}
