import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.getInforUser()
  }

  getInforUser() {
    this.authService.getAccount().subscribe((res) => {


    }, (error) => {
      this.router.navigate(['/login'])
    })
  }
}
