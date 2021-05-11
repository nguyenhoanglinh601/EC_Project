import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../Types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  ApiUrl = "https://hoangphuccamera.somee.com/api/products";
  // ApiUrl = "https://localhost:5001/api/products";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public countProductsTotal(): Observable<number> {
    return this.httpClient.get<number>(this.ApiUrl + "/CountProductsTotal");
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl);
  }

  public getProductsByPage(page: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "?index=" + page);
  }

  public getProductsByPageForAnalyse(page: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetForAnalyse?index=" + page);
  }

  public getProductsBestSell(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetProductsBestSell");
  }

  public getSimilarProducts(singleProduct: boolean, type: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetSimilarProducts?isSingleProduct=" + singleProduct + "&type=" + type);
  }

  public getSameBrandProducts(brandId: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetSameBrandProducts?brandId=" + brandId);
  }

  public getMoreProducts(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "?index=" + indexSkip);
  }

  public getWifiCameras(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetWifiCameras?indexSkip=" + indexSkip);
  }

  public getSecureCameras(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetSecureCameras?indexSkip=" + indexSkip);
  }

  public getCameraSets(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetCameraSets?indexSkip=" + indexSkip);
  }

  public getRecordDevices(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetRecordDevices?indexSkip=" + indexSkip);
  }

  public getMoreSingleProducts(type: string, indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetMoreProducts?type=" + type + "&indexSkip=" + indexSkip);
  }

  public getMoreProductSets(indexSkip: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/GetMoreProductSets?indexSkip=" + indexSkip);
  }

  public getProduct(data: string): Observable<Product> {
    return this.httpClient.get<Product>(this.ApiUrl + "/" + data);
  }

  public searchProducts(keyWord: string, brands: any, resolutions: any, categories: any): Observable<Product[]> {
    let url = this.ApiUrl + "/SearchProducts?";
    if (keyWord != "") url = url + "keyWord=" + keyWord;
    if (brands != "") url = url + "&brands=" + brands;
    if (resolutions != "") url = url + "&resolutions=" + resolutions;
    if (categories != "") url = url + "&categories=" + categories;
    return this.httpClient.get<Product[]>(url);
  }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ApiUrl + "/getall");
  }

  public postProduct(body: object): Observable<Product> {
    return this.httpClient.post<Product>(this.ApiUrl, body);
  }

  public deleleProduct(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateProduct(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + "/" + data, body);
  }
}
