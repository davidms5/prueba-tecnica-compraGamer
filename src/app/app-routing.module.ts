import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { CarritoComponent } from './components/carritoComponent/carrito/carrito.component';

const routes: Routes = [
  {path:"", redirectTo:"productos", pathMatch:"full"},
  {path:"productos", component:ListaDeProductosComponent},
  {path:"carrito", component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
