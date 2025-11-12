import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

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
      this.auth.saveToken(res.token)
      this.router.navigate(['/'])
        console.log(res);
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
}
