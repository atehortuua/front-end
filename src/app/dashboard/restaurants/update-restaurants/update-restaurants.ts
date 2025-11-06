import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-restaurants',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './update-restaurants.html',
  styleUrl: './update-restaurants.css',
})
export class UpdateRestaurants {
  restaurant = {
    name : '',
    address : '',
    image :'',
    description : '',
  };

  onSubmit(){
    console.log('Restaurante creado', this.restaurant);
  }

}
