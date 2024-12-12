import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ResgiterComponent } from '../resgiter/resgiter.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, ResgiterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
