import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Client, Product } from './interfaces/structureDataEcommerce';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]>{
    return this.http.get<Product[]>("https://static.compragamer.com/test/productos.json")
  };

  storeClientData(user: Client){
    localStorage.setItem('usuario', JSON.stringify(user));
  };

  getStoredClientData(): Client | null{
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(usuarioString) : null;
  };

  deleteStoredClientData(){
    localStorage.removeItem("usuario");
  }

}
