import { Routes } from '@angular/router';
import { HomeComponent } from './component/user/home/home.component';
import { ShopComponent } from './component/user/shop/shop.component';
import { FootfieldDetailComponent } from './component/user/footfield-detail/footfield-detail.component';
import { LoginComponent } from './component/user/login/login.component';
import { ResgiterComponent } from './component/user/resgiter/resgiter.component';
import { CartComponent } from './component/user/cart/cart.component';
import { LayoutComponent } from './component/user/layout/layout.component';
import { OrderComponent } from './component/user/order/order.component';
import { PagenotfoundComponent } from './component/user/pagenotfound/pagenotfound.component';
import { OrdersuccessComponent } from './component/user/ordersuccess/ordersuccess.component';
import { InforUserComponent } from './component/user/infor-user/infor-user.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'footfield_detail', component: FootfieldDetailComponent },
            { path: 'cart', component: CartComponent },
            { path: 'login', component: LoginComponent },
            { path: 'myInfor', component: InforUserComponent },
            { path: 'register', component: ResgiterComponent },
            { path: 'ordersuccess', component: OrdersuccessComponent },
            { path: 'order', component: OrderComponent },
            { path: '**', redirectTo: 'pagenotfound' },
            { path: 'pagenotfound', component: PagenotfoundComponent },

        ]
    },

];