import { Routes } from '@angular/router';
import { HomeComponent } from './component/user/home/home.component';
import { ShopComponent } from './component/user/shop/shop.component';
import { FootfieldDetailComponent } from './component/user/footfield-detail/footfield-detail.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent },
    { path: 'footfield_detail', component: FootfieldDetailComponent }
];
