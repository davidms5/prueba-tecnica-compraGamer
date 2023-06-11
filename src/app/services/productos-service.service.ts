import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product, Subcategorias } from '../interfaces/structureDataEcommerce';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]>{
    return this.http.get<Product[]>("https://static.compragamer.com/test/productos.json")
  };

  getSubCategorias(): Observable<Subcategorias[]>{
    return this.http.get<Subcategorias[]>("https://static.compragamer.com/test/subcategorias.json")
  }

}
