import { Component, inject } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { Votes } from '../../services/votes';
import Swal from 'sweetalert2';

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
      Swal.fire({
        html: `
          <div style="font-size: 100px; margin-bottom: 15px;">🔒</div>
          <h2 style="color: #d4af37; font-size: 2rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);">¡Inicia Sesión!</h2>
          <p style="color: #f5f5f5; font-size: 1.1rem; margin-top: 10px;">Debes iniciar sesión para votar</p>
        `,
        confirmButtonColor: '#d4af37',
        confirmButtonText: 'ENTENDIDO',
        background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
        customClass: {
          confirmButton: 'swal-btn-gold',
        },
      });
      return;
    }

    this.votesService.addVote(this.userId, productId).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          html: `
            <div style="font-size: 120px; margin-bottom: 20px; animation: burgerBounce 0.8s ease;">🍔</div>
            <h2 style="color: #d4af37; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; text-shadow: 0 0 15px rgba(212, 175, 55, 0.5); margin-bottom: 15px;">¡Voto Registrado!</h2>
            <p style="color: #f5f5f5; font-size: 1.2rem; margin-bottom: 10px;">Tu hamburguesa favorita está más cerca de ganar</p>
            <div style="color: #ffd700; font-size: 2.5rem; margin-top: 10px;">⭐⭐⭐</div>
          `,
          showConfirmButton: true,
          confirmButtonColor: '#d4af37',
          confirmButtonText: '🍔 ¡GRACIAS POR VOTAR!',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          showClass: {
            popup: 'animate__animated animate__zoomIn animate__faster',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut animate__faster',
          },
          customClass: {
            popup: 'swal-custom-burger',
            confirmButton: 'swal-btn-gold',
          },
          timer: 4000,
          timerProgressBar: true,
        });
      },
      error: (err) => {
        console.log('Error completo:', err);
        console.log('Mensaje del error:', err.error?.msg);

        // El mensaje exacto del backend es "Ya has votado!!"
        if (err.error?.msg === 'Ya has votado!!') {
          Swal.fire({
            html: `
              <div style="font-size: 120px; margin-bottom: 20px; animation: burgerShake 0.6s ease;">🍔🚫</div>
              <h2 style="color: #ff6b6b; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; text-shadow: 0 0 15px rgba(255, 107, 107, 0.5); margin-bottom: 15px;">¡Ya Votaste!</h2>
              <p style="color: #f5f5f5; font-size: 1.2rem; margin-bottom: 10px;">Solo puedes votar una vez por esta hamburguesa</p>
              <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px; margin-top: 15px; border: 1px solid rgba(212, 175, 55, 0.3);">
                <p style="color: #d4af37; font-size: 1rem; margin: 0;">🎉 ¡Invita a más personas a participar!</p>
              </div>
            `,
            showConfirmButton: true,
            confirmButtonColor: '#d4af37',
            confirmButtonText: 'ENTENDIDO',
            background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
            showClass: {
              popup: 'animate__animated animate__shakeX'  ,
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOut animate__faster',
            },
            customClass: {
              popup: 'swal-custom-error',
              confirmButton: 'swal-btn-gold',
            },
          });
        } else {
          Swal.fire({
            html: `
              <div style="font-size: 100px; margin-bottom: 15px;">⚠️</div>
              <h2 style="color: #ff6b6b; font-size: 2rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">¡Error al Votar!</h2>
              <p style="color: #f5f5f5; font-size: 1.1rem; margin-top: 10px;">Hubo un problema al registrar tu voto. Registrate para votar</p>
            `,
            confirmButtonColor: '#d4af37',
            confirmButtonText: 'ENTENDIDO',
            background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
            customClass: {
              confirmButton: 'swal-btn-gold',
            },
          });
        }
      },
    });
  }
}

