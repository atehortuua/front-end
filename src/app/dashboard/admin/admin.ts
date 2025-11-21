import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../services/product';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  private auth =  inject (Auth);
  get admin (){
     return this.auth.getRole() === 'admin';
  }

  get owner(){
    return this.auth.getRole()=== 'owner';
  }
}