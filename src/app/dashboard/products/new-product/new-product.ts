import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../../services/product';


@Component({
  selector: 'app-new-product',
  imports: [RouterLink, FormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  private productService = inject(Product)
  product= {
    nameRestaurant: '',
    name :'',
    description:'',
    image : '',
    price : null
  };
  
  onSubmit(){
    this.productService.createProduct(this.product).subscribe({
      next: (res : any) =>{
        console.log(res)

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
