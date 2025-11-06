import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-restaurants',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './info-restaurants.html',
  styleUrl: './info-restaurants.css',
})
export class InfoRestaurants {
  restaurant = {
    name : '',
    address : '',
    description : '',
};
  onSubmit(){
    console.log('Restaurante creado', this.restaurant);
  }
}