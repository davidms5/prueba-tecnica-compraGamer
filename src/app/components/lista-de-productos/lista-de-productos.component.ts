import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/structureDataEcommerce';
import { ProductosServiceService } from 'src/app/productos-service.service';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss']
})
export class ListaDeProductosComponent implements OnInit{

  productos: Product[]

  constructor(private productosService: ProductosServiceService) {
    this.productos = [];
  }
  ngOnInit(): void {
      
  }
}
