import { Component, OnInit } from '@angular/core';
import { Product, Subcategorias } from 'src/app/interfaces/structureDataEcommerce';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss']
})
export class ListaDeProductosComponent implements OnInit{

  color: ThemePalette = "primary";
  productos: Product[];
  Subcategorias: Subcategorias[];
  subcategoriaSeleccionada: string = ""

  constructor(private productosService: ProductosServiceService) {
    this.productos = [];
    this.Subcategorias = [];
  }

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerSubcategorias();
  }

  obtenerProductos() {
    this.productosService.getProductos().subscribe({
      next: (response) => this.productos = response,
      error: (error) => console.error(error),
    })
  }

  obtenerSubcategorias(){
    this.productosService.getSubCategorias().subscribe({
      next: (response) => this.Subcategorias = response,
      error: (error) => console.error(error),
    })
  }

  obtenerNombreSubcategoria(subcategoriaId: number): string {
    const subcategoria = this.Subcategorias.find(sub => sub.id === subcategoriaId);
    return subcategoria ? subcategoria.nombre : '';
  }
  
}
