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


@NgModule({
  declarations: [
    TableListProductsComponent,
    ProductsImageComponent,
    SearchProductsPipe,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    ModuleProductsRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ModuleProductsModule { }
