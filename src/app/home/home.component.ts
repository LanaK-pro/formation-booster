import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  FIRST_ARTICLE = [
    {
      title: 'TITRE DU SITE',
      content: 'test de content',
      img: 'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
    },
  ];
}
