import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient)
  private apiUrl : string ='http://localhost:3000'

  createProduct(data: any){
    return this.http.post(this.apiUrl+ '/api/products/createProduct' , data );
  }
  
}
