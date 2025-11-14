import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  private auth = inject (Auth)
  private router = inject(Router)
  user={
    name : '',
    lastName: '',
    number: '',
    email :'',
    password : '',
    password2: ''

  }

  register(){
    this.auth.register(this.user).subscribe({
      next: (res : any )=>{
        console.log(res)
        this.router.navigate(['/login'])
      }, 
      error : (err)=> {
        console.log(err)
      },



    });
  }
}
