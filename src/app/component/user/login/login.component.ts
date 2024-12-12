import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: any = {
    "email": "",
    "password": ""
  }


}
