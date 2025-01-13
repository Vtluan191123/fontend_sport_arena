import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { HomeServiceService } from '../../../service/home-service.service';

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

  filter: any = {
    "page": "1",
    "size": "8",
    "name": "",
    "typeField": "",
    "timeFrame": "",
    "sort": "",
    "capacity": "",
    "price": ""
  }

  constructor(private homeService: HomeServiceService, private userService: UserService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

  }


  getInforUser() {
    this.authService.getAccount().subscribe((res) => {

      console.log(res)
    }, (error) => {
      this.router.navigate(['/login'])
    })
  }

  getAllFootField() {
    this.homeService.getAllFootField
  }


}
