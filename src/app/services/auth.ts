import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl : string = 'http://localhost:3000'
  //importar httpClient
  private http = inject(HttpClient);

  register (data: any){ //verbos http
    return this.http.post(this.apiUrl+ '/api/users/createUser' , data );

  }

  login (data: any){
    return this.http.post(this.apiUrl + '/api/users/login' , data);
  }

  saveToken(token: string, role : string){
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
  };

  getToken(){
    return localStorage.getItem('token')
  };

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')

  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }
  isAdmin(){
    const role = localStorage.getItem('role')
    return role === 'admin' || role === 'owner'
    // return role === 'cliente'

  }






}
