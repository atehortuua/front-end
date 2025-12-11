import { Component, inject } from '@angular/core';
import { Product } from '../../../services/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-product',
  imports: [RouterLink, CommonModule],
  templateUrl: './info-product.html',
  styleUrl: './info-product.css',
})
export class InfoProduct {
  private productService = inject(Product);
  products: any[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductsByUser().subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products || [];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
