import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  objUser: any = {
    "name": "",
    "phoneNumber": "",
    "email": "",
    "password": "",
    "confirm": "",
    "role": 2
  }

  errConfirm: any;

  constructor(private userService: UserService, private router: Router) { }

  handleCreateUser() {

    if (this.objUser.password === this.objUser.confirm) {
      this.userService.postCreateUser(this.objUser).subscribe((res: any) => {
        alert('create success!!')
        this.router.navigate(['/admin/users'])
      }, (error) => {
        console.log(error);

        this.errConfirm = error.error.error
      })
    } else {
      this.errConfirm = "password and confirm not equal "
    }

  }

  handleReset() {
    this.objUser.name = ""
    this.objUser.phoneNumber = ""
    this.objUser.email = ""
    this.objUser.password = ""
    this.objUser.confirm = ""
  }
}

