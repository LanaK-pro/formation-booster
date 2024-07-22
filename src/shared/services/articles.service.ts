import { Injectable } from '@angular/core';
import { mockArticles } from '../mock/mockArticles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  fetchAllArticles() {
    return mockArticles;
  }

  fetchFirstArticle() {
    return mockArticles[0];
  }
}
