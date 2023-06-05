import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from './interfaces/structureDataEcommerce';
@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]>{
    return this.http.get<Product[]>("https://static.compragamer.com/test/productos.json")
  }
}
