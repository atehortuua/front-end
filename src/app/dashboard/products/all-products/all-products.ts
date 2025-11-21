import { Component, inject } from '@angular/core';
import { Product } from '../../../services/product';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {
  products: any;
  private productsService = inject(Product);

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(id: string) {}
  delete(id: string) {
    this.productsService.deleteProductById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getProducts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
