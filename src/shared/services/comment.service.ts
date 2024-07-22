import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icomment } from '../interface/icomment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  //URL de l'api
  url = 'https://jsonplaceholder.typicode.com/comments';

  //Ici tous les fonctions de CRUD
  constructor(private http: HttpClient) {}
  fetchAll() {
    return this.http.get<Icomment[]>(this.url);
  }
}
