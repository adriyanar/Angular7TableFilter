import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private productsUrl: string = '/assets/data/products.json';

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>( this.productsUrl );
  }

}
