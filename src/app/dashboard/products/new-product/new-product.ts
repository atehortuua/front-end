import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../../services/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-product',
  imports: [RouterLink, FormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  private productService = inject(Product)
  private router = inject(Router);

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
        this.router.navigate(['/'])
      },
      error:(err)=>{
        console.log(err)
        
      }
    })
  }
}
