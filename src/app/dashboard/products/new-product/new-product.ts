import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-new-product',
  imports: [RouterLink, FormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  product= {
    name :'',
    description:'',
    image : '',
    price : null
  };
  
  onSubmit(){
    console.log('producto creado', this.product);
  }
}
