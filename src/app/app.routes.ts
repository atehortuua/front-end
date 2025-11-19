import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { NewProduct } from './dashboard/products/new-product/new-product';
import { Admin } from './dashboard/admin/admin';
import { authGuard } from './guards/auth-guard';
import { VotesProduct } from './dashboard/votes-product/votes-product';
import { AllProducts } from './dashboard/products/all-products/all-products';
import { MyUser } from './dashboard/users/my-user/my-user';
import { UpdateUser } from './dashboard/users/update-user/update-user';
import { AllUsers } from './dashboard/users/all-users/all-users';



export const routes: Routes = [
    {path: '', component : Home},
    {path: 'contacto', component : Contacto},
    {path: 'login', component : Login},
    {path: 'registro', component :  Registro},

    //rutas Guard
    {
        path: 'dashboard', component :  Admin , canActivate: [authGuard],
        children : [
            {path: 'newProducts', component :  NewProduct},
            {path: 'votesProducts', component :  VotesProduct},
            {path: 'updateProduct/:id', component :  NewProduct},
            {path: 'products', component: AllProducts},

            {path: 'myUser', component: MyUser},
            {path: 'updateUser/:id', component : UpdateUser},
            {path: 'allUsers', component : AllUsers}       
                    ]
    },

    

    

    {path: '**', redirectTo: ''} //redireccionar al inicio


];
