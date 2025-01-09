import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = "http://localhost:8080/api/v1/orders";

  constructor(private http: HttpClient) {
  }

  createOrder(data: any): any {
    return this.http.post(this.url, data);
  }

  getHistoryOrder(id: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get(this.url, { params })
  }
}
