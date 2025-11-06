import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { InfoProduct } from './dashboard/products/info-product/info-product';
import { NewProduct } from './dashboard/products/new-product/new-product';
import { UpdateProduct } from './dashboard/products/update-product/update-product';
import { InfoRestaurants } from './dashboard/restaurants/info-restaurants/info-restaurants';
import { UpdateRestaurants } from './dashboard/restaurants/update-restaurants/update-restaurants';
import { Admin } from './dashboard/admin/admin';

export const routes: Routes = [
    {path: '', component : Home},
    {path: 'contacto', component : Contacto},
    {path: 'login', component : Login},
    {path: 'registro', component :  Registro},

    //rutas Guard
    {path: 'dashboard/admin', component :  Admin},
    {path: 'dashboard/products', component :  InfoProduct},
    {path: 'dashboard/newProducts', component :  NewProduct},
    {path: 'dashboard/updateProducts', component :  UpdateProduct},
    {path: 'dashboard/restaurants', component :  InfoRestaurants},
    {path: 'dashboard/updateRestaurants', component :  UpdateRestaurants},

    {path: '**', redirectTo: ''} //redireccionar al inicio


];
