import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  user={
    name : '',
    lastName: '',
    number: '',
    email :'',
    password : '',
    password2: ''

  }

  register(){
    console.log(' usurio creado')
    console.log(this.user)
  }
}
