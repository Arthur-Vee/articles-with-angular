import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles' 

  constructor(private http: HttpClient) { }

  getArticles(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(this.apiUrl)
  }

  getArticleById(articleId: any): Observable<any> {
    const apiUrlWithId = `${this.apiUrl}/${articleId}`;
    return this.http.get(apiUrlWithId);
  }
  
}
