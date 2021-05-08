import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category } from '../Types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  // ApiUrl="https://hoangphuccamera.somee.com/api/categories";
  ApiUrl="https://localhost:5001/api/categories";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.ApiUrl);
  }

  public getCategory(data: string): Observable<Category> {
    return this.httpClient.get<Category>(this.ApiUrl + data);
  }

  public postCategory(body: object): Observable<Category> {
    return this.httpClient.post<Category>(this.ApiUrl, body);
  }

  public deleleCategory(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateCategory(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + data, body);
  }
}
