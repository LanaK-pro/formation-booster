import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface coursesList {
  image: string;
  name: string;
  technicalStack: string;
  date: string;
  places: number;
  price: number;
}
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  coursesLists: coursesList[] = [
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'DEVELOPPER WEB ET WEB MOBILE',
      technicalStack: 'Symfony, Angular, ...',
      date: '7mois de formation 2mois de stages',
      places: 15,
      price: 0,
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: "CONCEPTEUR DEVELOPPER D'APPLICATION",
      technicalStack: 'Java, Angular, Android, Javascript, ...',
      date: '7mois de formation 4mois de stages',
      places: 15,
      price: 0,
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'DEVELOPPEUR FULLSTACK JAVA/ANGULAR',
      technicalStack: 'Java, Spring, Angular, Kotlin, ...',
      date: '12mois',
      places: 15,
      price: 0,
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'CONCEPTEUR DESIGNER UI',
      technicalStack: 'Photoshop, Illustrator, ...',
      date: '8mois de formation 1,5mois de stages',
      places: 15,
      price: 0,
    },
  ];
}
