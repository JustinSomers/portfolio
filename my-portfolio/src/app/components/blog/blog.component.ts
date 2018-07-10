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

  Error: String = '';
  Articles: IArticle[] = [];
  constructor(private blogService: BlogServiceService) { }

  ngOnInit() {
    this.GenerateArticles(1);
  }

  LoadMore(): void {
    let article: IArticle = {} as IArticle;
    if ( this.Articles.length > 0 ) {
      article = this.Articles[this.Articles.length - 1];
      this.blogService.FetchNextArticle(article._id.toString())
        .subscribe( (resp) => {
          if ( resp ) {
            this.Articles.push(resp);
          } else {
            this.Error = 'No More Articles Found';
          }
        }, ( err ) => {
          this.Error = err;
        });
    } else {
      this.blogService.FetchTop5Articles().subscribe( ( resp) => {
        this.Articles = resp;
      });
    }
    console.log('Load More was pressed!');
  }

  private GenerateArticles(numArticles: number): void {
    this.blogService.FetchTop5Articles().subscribe( (resp) => {
      this.Articles = resp;
    }, (err) => {
      this.Error = err;
    });
  }


}
