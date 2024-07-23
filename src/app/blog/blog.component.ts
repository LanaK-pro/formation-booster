import { Component, OnInit, inject } from '@angular/core';
import { Iblog } from '../../shared/interface/iblog';
import { BlogService } from '../../shared/services/blog.service';
import { Iuser } from '../../shared/interface/iuser';
import { UserService } from '../../shared/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  articles: Iblog[] = [];
  users: Iuser[] = [];

  //Plus besoin du constructor, direcement dans une variable
  service = inject(BlogService);
  userService = inject(UserService);

  ngOnInit(): void {
    this.getBlog();
    this.getUser();
  }

  //Data c'est les données de l'API, subscribe souscrit a un flux de données API
  getBlog() {
    this.service.fetchAll().subscribe((data) => {
      this.articles = data;
    });
  }

  //Pour prendre l'erreur si il y en a une
  getUser() {
    this.userService.fetchAll().subscribe(
      (data) => (this.users = data),
      (error) => console.error('User not found', error),
    );
  }

  getUserName(userId: number) {
    const user = this.users.find((username) => username.id === userId);
    return user ? user.name : 'Pas de user trouvé';
  }

  /*  isCurrentUserArticle(articleid: number, userid: number): number {
    if (articleid === userid) {
      return userid;
    } else {
      return 0;
    }
  } */
}
