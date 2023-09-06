import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product: Product = {} as Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state as any;
    this.product = data.product;
  }

  ngOnInit(): void {
  }

  submitForm(data: Product) {
    this.productService.updateProduct(data).subscribe(
      {
        next: (response) => {
          this.router.navigate(['/']);
        }
      }
    );
  }
}
