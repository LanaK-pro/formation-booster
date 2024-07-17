import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
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
      domaine: 'Dev',
      city: 'Lyon',
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: "CONCEPTEUR DEVELOPPER D'APPLICATION",
      technicalStack: 'Java, Angular, Android, Javascript, ...',
      date: '7mois de formation 4mois de stages',
      places: 36,
      price: 0,
      domaine: 'Dev',
      city: 'Lyon, Clermont',
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'DEVELOPPEUR FULLSTACK JAVA/ANGULAR',
      technicalStack: 'Java, Spring, Angular, Kotlin, ...',
      date: '12mois',
      places: 12,
      price: 0,
      domaine: 'Dev',
      city: 'Clermont',
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'CONCEPTEUR DESIGNER UI',
      technicalStack: 'Photoshop, Illustrator, ...',
      date: '8mois de formation 1,5mois de stages',
      places: 5,
      price: 0,
      domaine: 'Design',
      city: 'Lyon',
    },
    {
      image:
        'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
      name: 'TECHNICIEN D’ASSISTANCE EN INFORMATIQUE',
      technicalStack:
        'Assembler, installer et gérer les équipements informatiques et logiciels',
      date: '9 mois de formation 2 mois de stage',
      places: 20,
      price: 0,
      domaine: 'Infra',
      city: 'Lyon, Clermont',
    },
  ];

  //Pour les villes de chaques formation
  onButtonClick(message: string) {
    alert(message);
  }

  //Tableau de cours filtré vide
  filteredCourses: any[] = [];

  //Le tableau filtré c'est le même que celui de cours
  ngOnInit() {
    this.filteredCourses = this.coursesLists;
  }

  //Evenement quand je choisir un select il prends la valeur et compare au courses filtré
  onChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filterCourses(selectedValue);
  }

  //Filtre les cours selon le domaine, compare course choisi et les courses dispo
  filterCourses(domain: string) {
    if (domain === 'All') {
      this.filteredCourses = this.coursesLists;
    } else {
      this.filteredCourses = this.coursesLists.filter(
        (course) => course.domaine === domain,
      );
    }
  }
}
