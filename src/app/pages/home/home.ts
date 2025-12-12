import { Component, inject } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { Votes } from '../../services/votes';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productService = inject(Product);
  private votesService = inject(Votes);
  products: any = [];
  userId: string | null = localStorage.getItem('userId');

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.products;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  
  vote(productId: string) {
    if (!this.userId) {
      alert('Debes iniciar sesion para votar');
      return;
    }
    this.votesService.addVote(this.userId, productId).subscribe({
      next: (res: any) => {
        console.log(res);
        alert('voto registrado con exito');
      },
      error: (err) => {
        console.log(err);

        if (err.error?.msg === 'Ya Has Votado!') {
          alert('Ya votaste');
        } else {
          alert('Error al Votar');
        }
      },
    });
  }
}
