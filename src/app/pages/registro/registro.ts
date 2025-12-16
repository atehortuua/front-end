import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private auth = inject(Auth);
  private router = inject(Router);
  user = {
    name: '',
    lastName: '',
    number: '',
    email: '',
    password: '',
    password2: '',
  };

  register() {
    this.auth.register(this.user).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          html: `
    <div style="font-size: 100px; margin-bottom: 20px; animation: burgerBounce 0.8s ease;">📧✨</div>
    <h2 style="color: #d4af37; font-size: 2.2rem; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; text-shadow: 0 0 15px rgba(212, 175, 55, 0.5); margin-bottom: 15px;">¡Cuenta Creada!</h2>
    <p style="color: #f5f5f5; font-size: 1.2rem; margin-bottom: 15px;">Revisa tu correo electrónico</p>
    <div style="background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 10px; border: 1px solid rgba(212, 175, 55, 0.3);">
      <p style="color: #d4af37; font-size: 1rem; margin: 0;">✉️ Te hemos enviado un correo de verificación</p>
    </div>
  `,
          showConfirmButton: true,
          confirmButtonColor: '#d4af37',
          confirmButtonText: '✓ ENTENDIDO',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          showClass: {
            popup: 'animate__animated animate__fadeInUp animate__faster',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown animate__faster',
          },
          customClass: {
            popup: 'swal-custom-burger',
            confirmButton: 'swal-btn-gold',
          },
        });

        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
