import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Iarticles } from '../../shared/interface/iarticles';
import { ArticlesService } from '../../shared/services/articles.service';
//import { BonjourService } from '../../shared/bonjour.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  salut: string = '';
  resultat: number = 0;
  article: Iarticles[] = [];

  constructor(private service: ArticlesService) {}

  /* ngOnInit(): void {
    this.article = this.service.fetchFirstArticle;
  }
  //Injection de service

  /* constructor(private service: BonjourService) {}

  ngOnInit(): void {
    this.salut = this.service.saluer();
    this.resultat = this.service.additioner(5, 5);
  } */
}
