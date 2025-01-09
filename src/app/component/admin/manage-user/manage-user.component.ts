import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { debug } from 'node:console';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'] // sửa từ `styleUrl` thành `styleUrls`
})
export class ManageUserComponent implements OnInit {
  searchName: any;
  listUsers: any;


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {


  }
  ngOnInit(): void {

    this.handleGetAllUsers()
  }

  getInforUser() {
    this.authService.getAccount().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
  }

  handleGetAllUsers() {
    this.userService.getAllUser().subscribe(
      (res: any) => {
        console.log('res', res);
        this.listUsers = res.data;

      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
