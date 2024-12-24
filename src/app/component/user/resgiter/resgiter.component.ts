import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-resgiter',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './resgiter.component.html',
  styleUrl: './resgiter.component.css'
})
export class ResgiterComponent {

  objRegister: any = {
    'name': '',
    'email': '',
    'phoneNumber': '',
    'password': ''
  }

  start: any
  constructor(private authService: AuthService, private router: Router) { }

  handleRegister() {
    this.authService.register(this.objRegister).subscribe((res: any) => {
      this.router.navigate(['/login'])
    }, (err: any) => {
      throw new err
    })
  }


  test() {
    console.log('check', this.start);

  }
}
