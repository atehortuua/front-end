import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private auth = inject(Auth);
  private router = inject(Router)
  

  get  logeado(){
    return this.auth.isLoggedIn();
  }
  
  get admin(){
    return this.auth.isAdmin();
  }

  logout () {
    this.auth.logout();
    Swal.fire("Sesion cerrada");
    this.router.navigate([''])

  }
}
