import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/user/layout-user/header/header.component';
import { FooterComponent } from './component/user/layout-user/footer/footer.component';
import { HomeComponent } from './component/user/home/home.component';
import { ShopComponent } from './component/user/shop/shop.component';
import { CartComponent } from './component/user/cart/cart.component';
import { ContactComponent } from './component/user/contact/contact.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
];
