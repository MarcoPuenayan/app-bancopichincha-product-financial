import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleProductsRoutingModule } from './module-products-routing.module';
import { TableListProductsComponent } from './components/table-list-products/table-list-products.component';
import { ProductsImageComponent } from './components/products-image/products-image.component';
import { SearchProductsPipe } from './pipes/search-products.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


@NgModule({
  declarations: [
    TableListProductsComponent,
    ProductsImageComponent,
    SearchProductsPipe,
    DropdownMenuComponent,
    NewProductComponent,
    EditProductComponent,
    ProductFormComponent

  ],
  imports: [
    CommonModule,
    ModuleProductsRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModuleProductsModule { }
