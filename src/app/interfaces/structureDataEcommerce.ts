export interface Product {
    destacado: number;
    nombre: string;
    id_producto: number;
    id_subcategoria: number;
    precio: number;
    imagenes: Image[];
    vendible: number;
    stock: number;
    garantia: number;
    iva: number;
  }
  
  export interface Image {
    nombre: string;
    id_producto_imagen: number;
    orden: number;
  }