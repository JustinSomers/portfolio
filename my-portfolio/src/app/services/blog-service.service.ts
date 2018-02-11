import { Injectable } from '@angular/core';
import { IArticle } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogServiceService {

  constructor(private http: HttpClient) { }


  FetchArticle(): IArticle[] {

  }
}