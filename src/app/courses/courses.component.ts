import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icourses } from '../../shared/interface/courses';
import { CoursesService } from '../../shared/services/courses.service';
export interface coursesList {
  image: string;
  name: string;
  technicalStack: string;
  date: string;
  places: number;
  price: number;
  domaine: string;
  city: string;
}
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  //mangas: Imanga[] = [];
  //constructor(private service: MangaService) {}

  courses: Icourses[] = [];

  constructor(private service: CoursesService) {}

  //Pour les villes de chaques formation
  onButtonClick(message: string) {
    alert(message);
  }

  //Tableau de cours filtré vide
  filteredCourses: any[] = [];

  //Le tableau filtré c'est le même que celui de cours, TABLEAU MANGA
  ngOnInit() {
    this.courses = this.service.fetchAllCourses();
    //this.mangas = this.service.fetchAll();
    this.filteredCourses = this.service.fetchAllCourses();
  }

  //Evenement quand je choisir un select il prends la valeur et compare au courses filtré
  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filterCourses(selectedValue);
  }

  //Filtre les cours selon le domaine, compare course choisi et les courses dispo
  filterCourses(domain: string) {
    if (domain === 'All') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(
        (courses) => courses.domaine === domain,
      );
    }
  }
}
