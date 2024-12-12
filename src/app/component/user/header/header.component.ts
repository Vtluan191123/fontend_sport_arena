import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { cartService } from '../../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  total: number = 0

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getTotal()

  }



  getTotal() {
    const totalCart = localStorage.getItem('total')
    if (totalCart != null) {
      this.total = JSON.parse(totalCart);
    } else {
      this.total = 0
    }
  }

  routerShop() {
    this.router.navigate(['/shop'])
  }





}