import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  
  private auth = inject (Auth)
  private router =inject(Router)
  user={
    email :'',
    password : ''
  }

  login(){
    this.auth.login(this.user).subscribe({
    
      next : (res : any)=>{
      this.auth.saveToken(res.token, res.role)
      Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
});

      if (res.role === 'cliente'){
        this.router.navigate(['/']);
      }else {
        this.router.navigate(['/dashboard/admin']);

      }

        console.log(res);
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
}
