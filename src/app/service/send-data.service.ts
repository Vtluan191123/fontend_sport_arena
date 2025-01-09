import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  private dataLocalStorage = new BehaviorSubject<any>(localStorage.getItem('token')); // Tạo một BehaviorSubject để lưu dữ liệu
  currentDataLocalstorage: any = this.dataLocalStorage.asObservable(); // Cho phép components khác subscribe vào


  private dataInforUser = new BehaviorSubject<any>(null); // Tạo một BehaviorSubject để lưu dữ liệu
  currentDataInforUsere: any = this.dataInforUser.asObservable();

  private dataNameField = new BehaviorSubject<any>(null); // Tạo một BehaviorSubject để lưu dữ liệu
  currentDataNameField: any = this.dataNameField.asObservable();


  constructor() { }

  // Hàm để cập nhật dữ liệu
  updateLocalStorage(value: any) {
    this.dataLocalStorage.next(value);
  }

  updateInforUser(value: any) {
    this.dataInforUser.next(value);
  }

  updateNameField(value: any) {
    this.dataNameField.next(value);
  }
}


