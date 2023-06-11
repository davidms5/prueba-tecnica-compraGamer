import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/structureDataEcommerce';

@Pipe({
  name: 'filterBySubcategoria',
})
export class FilterBySubcategoriaPipe implements PipeTransform {
  transform(productos: Product[], subcategoria: string): Product[] {
    if (!subcategoria || subcategoria === '') {
      return productos;
    }
    return productos.filter((producto) => producto.id_subcategoria === +subcategoria);
  }
}
