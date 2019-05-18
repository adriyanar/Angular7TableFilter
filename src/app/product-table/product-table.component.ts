import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Products[] = [];

  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe( data => this.products = data );
  }
  
}
