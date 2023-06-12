import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FilterBySubcategoriaPipe } from './components/lista-de-productos/filterBySubcategoria.pipe';
import { MatIconModule } from '@angular/material/icon';
import { CarritoComponent } from './components/carritoComponent/carrito/carrito.component';
import { FilterDuplicatesByPropertyPipe } from './components/carritoComponent/filterDuplicatesByProperty.pipe';
import { MatBadgeModule } from '@angular/material/badge';
import { UserFormComponent } from './components/userRegistration/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ShowUsersComponent } from './components/userRegistration/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeProductosComponent,
    FilterBySubcategoriaPipe,
    CarritoComponent,
    FilterDuplicatesByPropertyPipe,
    UserFormComponent,
    ShowUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
