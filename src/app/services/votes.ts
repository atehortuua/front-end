import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Votes {
  private API = 'http://localhost:3000/api/votes';
  private http = inject(HttpClient);

  getToken() {
    return localStorage.getItem('token');
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    });
  }

  getAllVotes() {
    return this.http.get(this.API);
  }

  addVote(userId: string, productId: string) {
    return this.http.post(`${this.API}/add/${userId}`, { productId }, {
      headers: this.getHeaders(),
    });
  }

  getVotes(productId: string) {
    return this.http.post(`${this.API}/${productId}`, {});
  }

  getVotesCount(productId: string) {
    return this.http.post(`${this.API}/${productId}/count`, {});
  }

  getRanking() {
    return this.http.get(`${this.API}/ranking`);
  }

  getRankingByOwner() {
    return this.http.get(`${this.API}/ranking/owner`, { headers: this.getHeaders() });
  }
}
