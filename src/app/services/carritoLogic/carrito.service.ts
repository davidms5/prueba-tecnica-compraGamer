import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/structureDataEcommerce';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productos: Product[] = [];
  private productosSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  obtenerProductos(): Observable<Product[]> {
    return this.productosSubject.asObservable();
  }

  agregarAlCarrito(producto: Product) {
    this.productos.push(producto);
    this.productosSubject.next(this.productos.slice());
  }

  obtenerCantidadArticulos(): number {
    return this.productos.length;
  }
}
