import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../admin/nav/nav.component';
import { FooterAdminComponent } from '../../admin/footer-admin/footer-admin.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
