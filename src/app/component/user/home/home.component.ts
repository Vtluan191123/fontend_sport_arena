import { Component } from '@angular/core';
import { HeaderComponent } from '../layout-user/header/header.component';
import { FooterComponent } from '../layout-user/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
