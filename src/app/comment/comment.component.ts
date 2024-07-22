import { Component, OnInit, inject } from '@angular/core';
import { Icomment } from '../../shared/interface/icomment';
import { CommentService } from '../../shared/services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent implements OnInit {
  comments: Icomment[] = [];

  service = inject(CommentService);

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.service.fetchAll().subscribe((data) => {
      this.comments = data;
    });
  }
}
