import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../Types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  ApiUrl = "https://localhost:5001/api/products/";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl);
  }

  public getProductsBestSell(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.ApiUrl+"GetProductsBestSell");
  }
  public getMoreProducts(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "?index=" + indexSkip);
  }

  public getProduct(data: string): Observable<Product> {
    return this.httpClient.get<Product>(this.ApiUrl + data);
  }

  public postProduct(body: object): Observable<Product> {
    return this.httpClient.post<Product>(this.ApiUrl, body);
  }

  public deleleProduct(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateProduct(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + data, body);
  }
}
