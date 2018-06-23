import { Injectable } from '@angular/core';
import { IArticle } from '../models/article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const URL = 'http://localhost:3000/api';

@Injectable()
export class BlogServiceService {

  constructor(private http: HttpClient) { }


  FetchArticles(): Observable<IArticle[]> {
    return this.http.get(URL + '/articles') as Observable<IArticle[]>;
    // return [
    //   {
    //     Date: new Date().toLocaleDateString(),
    //     Title: 'Under Construction',
    //     Subtitle: 'By Justin Somers',
    //     Content: 'This Blog is currently under construction.  I am currently implementing the back end service to retrieve articles'
    //   } as IArticle];
  }
}
