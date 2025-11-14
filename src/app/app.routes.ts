import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { NewProduct } from './dashboard/products/new-product/new-product';
import { Admin } from './dashboard/admin/admin';
import { authGuard } from './guards/auth-guard';
import { VotesProduct } from './dashboard/votes-product/votes-product';


export const routes: Routes = [
    {path: '', component : Home},
    {path: 'contacto', component : Contacto},
    {path: 'login', component : Login},
    {path: 'registro', component :  Registro},

    //rutas Guard
    {path: 'dashboard/admin', component :  Admin , canActivate: [authGuard]},

    {path: 'dashboard/newProducts', component :  NewProduct},
    {path: 'dashboard/votesProducts', component :  VotesProduct,},

    

    {path: '**', redirectTo: ''} //redireccionar al inicio


];
