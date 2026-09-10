import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private apiUrl: string = 'http://localhost:3000'; // O tu dominio de producción
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get(`${this.apiUrl}/api/users/users`); // Agregué la barra antes de api
  }

  getUsersById(id: string) {
    return this.http.get(`${this.apiUrl}/api/users/users/${id}`); //  Faltaba la barra antes del id
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this.apiUrl}/api/users/deleteusers/${id}`); //  Agregué la barra antes de api
  }

  updateUserById(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/api/users/updateusers/${id}`, data); // Agregué la barra antes de api
  }
}