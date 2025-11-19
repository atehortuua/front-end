import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../services/product';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}