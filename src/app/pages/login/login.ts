import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule,  ],
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
      title: "Drag me!",
      icon: "success",
      draggable: true
});

      if (res.role === 'cliente'){
        this.router.navigate(['/']);
      }else {
        this.router.navigate(['/dashboard']);

      }

      
      },
      error : (err)=> {
        if(err.status = 403){
          Swal.fire("No te has Verificado.. Revisa tu correo!");
        }
        
        console.log(err);
        
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
