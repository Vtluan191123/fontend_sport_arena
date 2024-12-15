import { Component, OnInit } from '@angular/core';
import { cartService } from '../../../service/cart.service';
import { error } from 'console';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SendDataService } from '../../../service/send-data.service';
import { json } from 'stream/consumers';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  email: string = ''
  fetchdata: any;

  constructor(private cartService: cartService, private authService: AuthService, private sendLocalStorage: SendDataService, private router: Router) {
  }

  ngOnInit(): void {

    this.getInforUser();
  }

  getInforUser() {
    this.authService.getAccount().subscribe((res) => {

      this.email = res.data.email
      this.generaterCart();
      console.log('check', this.email);
    }, (error) => {
      this.router.navigate(['/login'])
    })
  }


  generaterCart() {
    this.cartService.generaterCart(this.email).subscribe((data: any) => {
      this.fetchdata = data;
      localStorage.setItem('total', JSON.stringify(this.fetchdata.data.total))
      this.sendLocalStorage.updateLocalStorage(JSON.stringify(this.fetchdata.data.total));
    }, (error: any) => {
      console.log('loi', error);

    })
  }

  deleteItem(id: number) {
    const checkDelete = confirm('bạn có chắc muốn xóa ko');
    if (checkDelete) {
      this.cartService.deleteCartDetail(id).subscribe((data: any) => {
        alert('xóa thành công');
        this.generaterCart()


      }, (error: any) => {
        alert('xóa thất bại');
      })

    }

  }

  sendData() {
    localStorage.setItem('list_cart_detail', JSON.stringify(this.fetchdata));
  }

}
