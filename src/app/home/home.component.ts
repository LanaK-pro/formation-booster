import { Component, OnInit } from '@angular/core';
import { BonjourService } from '../../shared/bonjour.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  salut: string = '';
  resultat: number = 0;
  FIRST_ARTICLE = [
    {
      title: 'TITRE DU SITE',
      content: 'test de content',
      img: 'https://www.openlab-clermont.com/wp-content/uploads/2022/04/logo-human-booster.jpg',
    },
  ];

  //Injection de service

  constructor(private service: BonjourService) {}

  ngOnInit(): void {
    this.salut = this.service.saluer();
    this.resultat = this.service.additioner(5, 5);
  }
}
