import { Component, inject } from '@angular/core';
import { Product } from '../../../services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-product',
  imports: [RouterLink],
  templateUrl: './info-product.html',
  styleUrl: './info-product.css',
})
export class InfoProduct {
  private productService = inject(Product);
  product: any;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductsByUser().subscribe({
      next: (res: any) => {
        console.log(res);
        
        this.product = res.products[0];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
