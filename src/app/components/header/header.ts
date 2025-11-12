import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private auth = inject(Auth);
  

  get  logeado(){
    return this.auth.isLoggedIn();
  }
  get admin (){
    return this.auth.isAdmin();
  }

  logout () {
    this.auth.logout();
  }
}
