import { Component, inject } from '@angular/core';
import { Product } from '../../../services/product';
import Swal from 'sweetalert2';

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


  deleteProduct(id: string) {

  Swal.fire({
    title: "Estas seguro de eliminarlo?",
    text: "No se revertiran los cambios",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar"
  }).then((result) => {

    if (result.isConfirmed) {

      this.productsService.deleteProductById(id).subscribe({
        next: (res: any) => {
          Swal.fire({
            title: "Eliminado!",
            text: "Se ha eliminado",
            icon: "success"
          });

          this.getProducts();
        },
        error: (err) => {
          console.log(err);
        }
      });

    }
  });

}

}
