import { Injectable } from '@angular/core';
import { Client } from '../interfaces/structureDataEcommerce';

@Injectable({
  providedIn: 'root'
})
export class StoreDataUserService {

  constructor() { }
  storeClientData(user: Client){
    localStorage.setItem('usuario', JSON.stringify(user));
  };

  getStoredClientData(): Client | null{
    const usuarioString = localStorage.getItem('usuario');
    return usuarioString ? JSON.parse(usuarioString) : null;
  };

  deleteStoredClientData(){
    localStorage.removeItem("usuario");
  };
}
