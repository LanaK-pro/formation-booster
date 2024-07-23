import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Iblog } from '../../shared/interface/iblog';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent implements OnInit {
  service = inject(BlogService);
  route = inject(ActivatedRoute);
  article: Iblog | undefined;

  ngOnInit(): void {
    this.fetchOneArticle();
  }

  fetchOneArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.fetchOne(id).subscribe((data) => (this.article = data));
  }
}
