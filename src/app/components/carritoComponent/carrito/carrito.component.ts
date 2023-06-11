import { Component } from '@angular/core';
import { Product, CartItem } from 'src/app/interfaces/structureDataEcommerce';
import { CarritoService } from 'src/app/services/carritoLogic/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  carrito: CartItem[];

  constructor(private carritoService: CarritoService){
    this.carrito = [];
  };

  ngOnInit() {
    this.carritoService.obtenerProductos().subscribe(productos => {
      this.carrito = this.agruparArticulos(productos);
    });
  }
  agruparArticulos(productos: Product[]): CartItem[] {
    const cartItems: CartItem[] = [];
    productos.forEach(producto => {
      const cartItemIndex = cartItems.findIndex(item => item.producto.id_producto === producto.id_producto);
      if (cartItemIndex > -1) {
        cartItems[cartItemIndex].cantidad++;
      } else {
        cartItems.push({ producto: producto, cantidad: 1 });
      }
    });
    return cartItems;
  }
  


}
