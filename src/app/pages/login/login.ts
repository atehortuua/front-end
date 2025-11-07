import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  private auth = inject (Auth)
  user={
    email :'',
    password : ''
  }

  login(){
    this.auth.login(this.user).subscribe({
      next : (res : any)=>{
        console.log(res);
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
}
