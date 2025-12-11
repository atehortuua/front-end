import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
  export class Votes {
  private API = 'http://localhost:3000/api/votes';
  private http = inject(HttpClient);

 getAllVotes() {
  return this.http.get(this.API);
}


  addVote(userId: string, productId : string){
    return this.http.post(`${this.API}/add/${userId}`, { productId})
  }

  getVotes(productId: string,){
    return this.http.post(`${this.API}/${productId}`, {});
  }


  getVotesCount(productId : string){
    return this.http.post(`${this.API}/${productId}/count`, {})
  }
  getRanking() {
    return this.http.get(`${this.API}/ranking`);
  }
  
}
