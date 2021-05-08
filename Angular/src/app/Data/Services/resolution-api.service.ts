import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Resolution } from '../../Data/Types/Resolution';

@Injectable({
  providedIn: 'root'
})
export class ResolutionApiService {
  // ApiUrl="https://hoangphuccamera.somee.com/api/resolutions";
  ApiUrl="https://localhost:5001/api/resolutions";

  httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getResolutions(): Observable<Resolution[]> {
    return this.httpClient.get<Resolution[]>(this.ApiUrl);
  }

  public getResolution(data: string): Observable<Resolution> {
    return this.httpClient.get<Resolution>(this.ApiUrl + data);
  }

  public postResolution(body: object): Observable<Resolution> {
    return this.httpClient.post<Resolution>(this.ApiUrl, body);
  }

  public deleleResolution(data: string) {
    return this.httpClient.delete(this.ApiUrl + data);
  }

  public updateResolution(body: object, data: string) {
    return this.httpClient.put(this.ApiUrl + data, body);
  }
}
