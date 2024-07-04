import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
export const routes: Routes = [ 
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'menu',
        component: MenuComponent,
        title: 'menu'
    },
    {
        path: 'accueil',
        component: AccueilComponent,
        title: 'accueil'
    }
];
