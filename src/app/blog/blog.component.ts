import { Component, OnInit, inject } from '@angular/core';
import { Iblog } from '../../shared/interface/iblog';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  articles: Iblog[] = [];

  //Plus besoin du constructor, direcement dans une variable
  service = inject(BlogService);

  ngOnInit(): void {
    this.getBlog();
  }

  //Data c'est les données de l'API, subscribe souscrit a un flux de données API
  getBlog() {
    this.service.fetchAll().subscribe((data) => {
      this.articles = data;
    });
  }
}
