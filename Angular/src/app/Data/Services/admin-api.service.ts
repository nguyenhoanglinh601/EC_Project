import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Types/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  // ApiUrl="https://hoangphuccamera.somee.com/api/admins";
  ApiUrl="https://localhost:5001/api/admins";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  public login(phoneNumber: string, password: string): Observable<Admin>{
    return this.httpClient.get<Admin>(this.ApiUrl + "/login?phoneNumber=" + phoneNumber + "&password=" + password);
  }

  public getAdmins(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.ApiUrl);
  }

  public getAdmin(data: string): Observable<Admin> {
    return this.httpClient.get<Admin>(this.ApiUrl + data);
  }

  public postAdmin(body: object): Observable<Admin> {
    return this.httpClient.post<Admin>(this.ApiUrl, body);
  }

  public deleleAdmin(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateAdmin(body: object, data: string): Observable<any> {
    return this.httpClient.put<any>(this.ApiUrl + "/" + data, body);
  }
}
