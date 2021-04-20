import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from 'src/app/Data/Types/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {
  ApiUrl = "https://localhost:5001/api/orders/";

  constructor(private httpClient: HttpClient) { }

  public SearchOrders(customer_name: any, customer_phone_number: any): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.ApiUrl + "SearchOrder?customer_name=" + customer_name + "&customer_phone_number=" + customer_phone_number);
  }

  public getOrder(data: string): Observable<Order> {
    return this.httpClient.get<Order>(this.ApiUrl + data);
  }

  public postOrder(body: object): Observable<Order> {
    console.log(body);
    return this.httpClient.post<Order>(this.ApiUrl, body);
  }

  public deleleOrder(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateOrder(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + data, body);
  }
}
