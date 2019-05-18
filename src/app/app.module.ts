import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductsService } from './products.service';
import { FilterByName } from './searchFilterPipe';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    FilterByName
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
