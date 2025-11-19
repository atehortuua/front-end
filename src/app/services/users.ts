import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private apiUrl : string = 'http://localhost:3000/api/users';
  private http = inject(HttpClient);


  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUsersById(id: string) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  deleteUserById(id: string) {
    return this.http.delete(`${this.apiUrl}/deleteusers/${id}`);
  }
  updateUserById(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/updateusers/${id}`, data);
  }

  





}
