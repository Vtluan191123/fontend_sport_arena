import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-football-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-football-field.component.html',
  styleUrl: './manage-football-field.component.css'
})
export class ManageFootballFieldComponent implements OnInit {

  searchName: any
  listUsers: any

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

  }


  getInforUser() {
    this.authService.getAccount().subscribe((res) => {

      console.log(res)
    }, (error) => {
      this.router.navigate(['/login'])
    })
  }


}
