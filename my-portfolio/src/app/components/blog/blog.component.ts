import { BlogServiceService } from './../../services/blog-service.service';
import { Component, OnInit } from '@angular/core';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { IArticle } from '../../models/article.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Articles: IArticle[] = [];
  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.GenerateArticles(1);
  }

  LoadMore(): void {
    console.log('Load More was pressed!');
    this.GenerateArticles(5);
  }

  private GenerateArticles(numArticles: number): void {
    this.Articles = this.blogService.FetchArticle();
  }


}
