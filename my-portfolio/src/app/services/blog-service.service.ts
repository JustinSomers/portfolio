import { Injectable } from '@angular/core';
import { IArticle } from '../models/article.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const URL = 'http://localhost:3000/api';

interface INumArticlesParam {
  numArticles: number;
}
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

  FetchNextArticle(currentID: string): Observable<IArticle> {
    // const params: HttpParams = new HttpParams();
    // params.append('currentID', currentID);

    const testParam = new HttpParams().set('currentID', currentID);
    return this.http.get(URL + '/nextArticle',
     {params: testParam} ) as Observable<IArticle>;
  }

  FetchTop5Articles(): Observable<IArticle[]> {
    const parameters: HttpParams = new HttpParams().set('numArticles', '5');
    return this.http.get(URL + '/getXLatest',
      {params: parameters}) as Observable<IArticle[]>;
  }
}
