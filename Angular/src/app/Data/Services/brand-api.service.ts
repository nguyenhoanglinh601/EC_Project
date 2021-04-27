import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Brand } from '../../Data/Types/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandApiService {
  ApiUrl="https://hoangphuccamera.somee.com/api/brands";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getAllBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.ApiUrl + "/GetAll");
  }

  public getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.ApiUrl);
  }

  public getBrand(data: string): Observable<Brand> {
    return this.httpClient.get<Brand>(this.ApiUrl + data);
  }

  public postBrand(body: object): Observable<Brand> {
    return this.httpClient.post<Brand>(this.ApiUrl, body);
  }

  public deleleBrand(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateBrand(body: object, data: string): Observable<any> {
    return this.httpClient.put<any>(this.ApiUrl + "/" + data, body);
  }
}
