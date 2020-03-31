import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funds } from './models/funds';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8082/funds';
  }

  private data = [];

  public getFundsList(): Observable<Funds[]> {
    return this.http.get<Funds[]>(this.baseUrl);
  }

  public save(funds: Funds){
    return this.http.post<Funds>(this.baseUrl, funds);
  }

  setOption(value:any) {
    this.data.push(value);
  }

  getOption() {
    return this.data;
  }
}
