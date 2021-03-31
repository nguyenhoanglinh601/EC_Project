import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Book } from '../../Data/Types/test';

@Injectable({
  providedIn: 'root'
})
export class BookAPIService {
  ApiUrl = "https://localhost:5001/api/books/";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.ApiUrl);
  }

  public getBook(data: string): Observable<Book> {
    return this.httpClient.get<Book>(this.ApiUrl + data);
  }

  public postBook(body: object): Observable<Book> {
    return this.httpClient.post<Book>(this.ApiUrl, body);
  }

  public deleleBook(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateBook(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + data, body);
  }
}
