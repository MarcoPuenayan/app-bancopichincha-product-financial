import { Component, EventEmitter, Input, OnChanges, Output, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataTableColumn, Product } from '../../models/product.model';
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

  numPages = 1;




  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {

  }

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
    this.numPages = this.calculateNumPages();


  }

  calculateNumPages() {
    return Math.floor(this.datasource.length / this.pageSize) + ((this.datasource.length % this.pageSize)  === 0 ? 0 : 1);
  }



  editProduct(product: Product) {
    this.router.navigate(['products', 'edit', `${product.id}`], {state: {product}})
  }

  onDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);
  }

  changePageSize() {
    console.log('CANGE PAGE SZE');
    this.search(this.searchFilter);
  }



}

