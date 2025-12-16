import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  // private apiUrl: string = 'http://localhost:3000';
  private apiUrl: string = 'https://atehortua.duckdns.org';


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

  createProduct(data: any) {
    return this.http.post(this.apiUrl + '/api/products/createProduct', data, {
      headers: this.getHeaders(),
    });
  }
  getProducts() {
    return this.http.get(this.apiUrl + '/api/products/product');
  }

  getProductsByUser() {
    return this.http.get(this.apiUrl + '/api/products/productByUser', {headers: this.getHeaders()});
  }


   getProductsById(id : string) {
    return this.http.get(this.apiUrl + '/api/products/product/' +id);
  }

  updateproduct(id: String, data: any){
    return this.http.put(`${this.apiUrl}/api/products/updateProduct/${id}`, data, {headers: this.getHeaders() })
}


  deleteProductById(id: string) {
    return this.http.delete(this.apiUrl + '/api/products/deleteProduct/' + id, { headers: this.getHeaders(),
    });
  }
}
