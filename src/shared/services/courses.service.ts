import { Injectable } from '@angular/core';
import { mockCourses } from '../mock/mockCourses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  fetchAllCourses() {
    return mockCourses;
  }
}
