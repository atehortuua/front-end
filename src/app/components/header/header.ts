import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private auth = inject(Auth);
  private router = inject(Router);

  get logeado() {
    return this.auth.isLoggedIn();
  }

  get admin() {
    return this.auth.isAdmin();
  }

  logout() {
    this.auth.logout();
    Swal.fire({
      html: `
    <div style="font-size: 100px; margin-bottom: 15px;">👋</div>
    <h2 style="color: #d4af37; font-size: 2rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);">¡Sesión Cerrada!</h2>
    <p style="color: #f5f5f5; font-size: 1.1rem; margin-top: 10px;">Hasta pronto 🍔</p>
  `,
      confirmButtonColor: '#d4af37',
      confirmButtonText: 'OK',
      background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown animate__faster',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__faster',
      },
      customClass: {
        popup: 'swal-custom-burger',
        confirmButton: 'swal-btn-gold',
      },
    });

    this.router.navigate(['']);
  }
}
