import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  data: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.data = response as Product[];
      }
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe({
      next: (response) => {

      },
      complete:()=>{
        this.getAllProducts();
      },
      error:()=>{
        this.getAllProducts();
      }

    });
  }

}
