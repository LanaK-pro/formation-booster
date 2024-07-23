import { Component, OnInit, inject } from '@angular/core';
import { Icomment } from '../../shared/interface/icomment';
import { CommentService } from '../../shared/services/comment.service';
import { Iuser } from '../../shared/interface/iuser';
import { UserService } from '../../shared/services/user.service';
import { Iblog } from '../../shared/interface/iblog';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent implements OnInit {
  comments: Icomment[] = [];
  articles: Iblog[] = [];

  service = inject(CommentService);
  blogService = inject(BlogService);

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.service.fetchAll().subscribe((data) => {
      this.comments = data;
    });
  }

  /* getArticle(postId: number) {
    const post = this.comments.find((postid) => postid === postid);
    return post ? this.post.postid : 'Pas de user trouvé';
  } */
}
