import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cartService {

  url: string = 'http://localhost:8080/api/v1/cart';
  constructor(private http: HttpClient) { }

  addToCart(obj: any): any {
    return this.http.post(this.url, obj);
  }

  generaterCart(email: string): any {
    const params = new HttpParams().set('email', email);
    return this.http.get(this.url, { params });
  }

  deleteCartDetail(id: number): any {

    return this.http.delete(`${this.url}/${id}`)
  }

}
