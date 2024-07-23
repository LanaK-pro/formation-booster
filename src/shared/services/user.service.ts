import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interface/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlUsers = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  fetchAll() {
    return this.http.get<Iuser[]>(this.urlUsers);
  }
}
