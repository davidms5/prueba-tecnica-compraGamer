import { Component, OnInit } from '@angular/core';
import { Product, Subcategorias } from 'src/app/interfaces/structureDataEcommerce';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { ThemePalette } from '@angular/material/core';
import { CarritoService } from 'src/app/services/carritoLogic/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../userRegistration/user-form/user-form.component';
@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss']
})
export class ListaDeProductosComponent implements OnInit{

  color: ThemePalette = "primary";
  productos: Product[];
  Subcategorias: Subcategorias[];
  subcategoriaSeleccionada: string;
  cantidadArticulosCarrito: number;

  constructor(private productosService: ProductosServiceService, private carritoService: CarritoService, private dialog: MatDialog) {
    this.productos = [];
    this.Subcategorias = [];
    this.subcategoriaSeleccionada = ""
    this.cantidadArticulosCarrito = 0;
  }

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerSubcategorias();
   
  }

  ngDoCheck() {
    this.actualizarCantidadArticulosCarrito();
  };

  openRegistrationForm(): void {
    this.dialog.open(UserFormComponent, {
      width: '400px', // Ajusta el ancho del formulario de registro
    });
  }

  agregarAlCarrito(producto: Product) {
    this.carritoService.agregarAlCarrito(producto);
    this.actualizarCantidadArticulosCarrito();
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
  
  actualizarCantidadArticulosCarrito() {
    this.cantidadArticulosCarrito = this.carritoService.obtenerCantidadArticulos();
  }

  getBannerImageUrl(subcategoriaId: number | string): string {
    const staticPart = 'https://compragamer.net/categorias_demo/';
    const subcategoria = this.Subcategorias.find(sub => sub.id === subcategoriaId);
    if (subcategoria) {
      
      return staticPart + subcategoria.imagen;
    } else {
      return ''; 
    }
  }
}
