import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
    {path: '', component : Home},
    {path: 'contacto', component : Contacto},
    {path: 'login', component : Login},
    {path: 'registro', component :  Registro},
    {path: '**', redirectTo: ''} //redireccionar al inicio


];
