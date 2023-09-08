import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import {  Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list-products',
  templateUrl: './table-list-products.component.html',
  styleUrls: ['./table-list-products.component.scss']
})
export class TableListProductsComponent implements OnChanges {
  @Input() data: Product[] = [];

  @Output() deleteProduct = new EventEmitter();

  datasource: Product[] = [];

  pageSize = 5;

  pageSizeOptions = [5, 10, 15, 20, 1];

  currentPage = 1;

  searchFilter = '';

  constructor(
    private router: Router,
  ) {}

  ngOnChanges(changes: any): void {
    this.search('');
  }

  search(value: any) {
    this.datasource = this.data.filter(
      product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
    );
    this.searchFilter = value;

    const fromIndex = (this.currentPage - 1) * this.pageSize;
    const toIndex = fromIndex + this.pageSize;

    this.datasource = this.datasource.slice(fromIndex, toIndex);



  }


  editProduct(product: Product) {
    this.router.navigate(['products', 'edit', `${product.id}`], {state: {product}})
  }

  onDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);

  }

  changePageSize() {

    this.search(this.searchFilter);
  }



}

