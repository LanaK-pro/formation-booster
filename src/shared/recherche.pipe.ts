import { Pipe, PipeTransform } from '@angular/core';
import { mockCourses } from './mock/mockCourses';
import { CoursesService } from './services/courses.service';
import { Icourses } from './interface/icourses';

@Pipe({
  name: 'recherche',
  standalone: true,
})
export class RecherchePipe implements PipeTransform {
  /*
  transform(value: string[], search: string): string[] {
    return value.filter((value) =>
      value.toLowerCase().includes(search.toLowerCase()),
    );
  } */

  transform(value: any[], search: string, searchField: string): string[] {
    if (!value || !search || !searchField) {
      return value;
    }

    search = search.toLowerCase();
    return value.filter((item) => {
      const fieldValue = item[searchField];
      return (
        typeof fieldValue === 'string' &&
        fieldValue.toLowerCase().includes(search)
      );
    });
  }
}
