import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterAdminComponent } from '../footer-admin/footer-admin.component';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../../user/header/header.component';
import { FooterComponent } from '../../user/footer/footer.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterModule, FooterAdminComponent, NavComponent, HeaderComponent, FooterComponent],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

}
