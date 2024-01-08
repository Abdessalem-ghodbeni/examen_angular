import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environement/environement';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private backurl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  addProduct(Produit: any): Observable<any> {
    return this._http.post(`${this.backurl}/products`, Produit);
  }

  getAllProduct() {
    return this._http.get(`${this.backurl}/products`);
  }
  addToPanier(produit: any) {
    return this._http.post(`${this.backurl}/cart`, produit);
  }

  getAllProductPanier() {
    return this._http.get(`${this.backurl}/cart`);
  }

  getProduitbyid(id: number) {
    return this._http.get(`${this.backurl}/products/` + id);
  }

  updateProduct(produit: any, id: number) {
    return this._http.put(`${this.backurl}/products/${id}`, produit);
  }
  delete(id: number) {
    return this._http.delete(`${this.backurl}/products/${id}`);
  }
}
