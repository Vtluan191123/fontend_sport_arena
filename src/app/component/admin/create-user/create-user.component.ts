import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';

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

  constructor(private userService: UserService) { }

  handleCreateUser() {
    console.log("user", this.objUser);
  }
}
