import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
