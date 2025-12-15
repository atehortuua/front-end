import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  
  private auth = inject (Auth)
  private router =inject(Router)

  pass = '123456789'

  admin = {
    email: 'admin@gmail.com',
    password: this.pass
  }
  owner = {
    email: 'mistica@gmail.com',
    password: this.pass
  }
  client = {
    email: 'cliente3@gmail.com',
    password: this.pass
  }


  user={
    email :'',
    password : ''
  }

  login(){
    this.auth.login(this.user).subscribe({
    
      next : (res : any)=>{
        console.log(res);
      
        this.auth.saveToken(res.token, res.role);
        localStorage.setItem('userId', res.user._id);
        
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });

        if (res.role === 'cliente'){
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error : (err: any)=> {
        console.log(err);
        
        if (err.status === 403) {
          Swal.fire({
            title: 'Cuenta no verificada',
            text: 'Por favor revisa tu correo para verificar tu cuenta',
            icon: 'warning',
            confirmButtonColor: '#ff9800'
          });
        } else if (err.status === 401) {
          Swal.fire({
            title: 'Error de autenticación',
            text: 'Correo o contraseña incorrectos',
            icon: 'error',
            confirmButtonColor: '#e74c3c'
          });
        } else if (err.status === 404) {
          Swal.fire({
            title: 'Usuario no encontrado',
            text: 'El correo ingresado no está registrado',
            icon: 'error',
            confirmButtonColor: '#e74c3c'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al iniciar sesión. Inténtalo de nuevo',
            icon: 'error',
            confirmButtonColor: '#e74c3c'
          });
        }
      }
    })
  }


  loginAsAdmin() {
    this.user = { ...this.admin };
    this.login();
  }

  loginAsOwner() {
    this.user = { ...this.owner };
    this.login();
  }

  loginAsClient() {
    this.user = { ...this.client };
    this.login();
  }
}
