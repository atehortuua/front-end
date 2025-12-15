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
    title: "¿Estás seguro de eliminarlo?",
    text: "No se revertirán los cambios",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d4af37",
    cancelButtonColor: "#e74c3c",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    background: '#1a1a1a',
    color: '#f5f5f5',
    iconColor: '#ff9800'
  }).then((result) => {

    if (result.isConfirmed) {

      this.productsService.deleteProductById(id).subscribe({
        next: (res: any) => {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El producto ha sido eliminado exitosamente",
            icon: "success",
            confirmButtonColor: '#d4af37',
            background: '#1a1a1a',
            color: '#f5f5f5',
            iconColor: '#d4af37',
            confirmButtonText: 'Aceptar'
          });

          this.getProducts();
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el producto",
            icon: "error",
            confirmButtonColor: '#d4af37',
            background: '#1a1a1a',
            color: '#f5f5f5',
            iconColor: '#e74c3c',
            confirmButtonText: 'Cerrar'
          });
        }
      });

    }
  });

}

}
