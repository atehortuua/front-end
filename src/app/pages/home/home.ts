import { Component, inject } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private productService = inject(Product);
  products: any = [];

ngOnInit(){
  this.getProducts();
}


  getProducts(){
    this.productService.getProducts().subscribe({
      next: (res: any)=>{
        console.log(res)
        this.products = res.products
      },
      error: (err)=>{
          console.log(err)
      }
    })

}
}