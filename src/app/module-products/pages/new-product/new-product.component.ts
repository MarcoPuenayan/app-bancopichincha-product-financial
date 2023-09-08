import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { UniqueIdValidatorService } from '../../services/unique-id-validator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  product: Product = {} as Product;
  private idSubscription?: Subscription;
  productForm = new FormGroup({});

  constructor(
    private productService: ProductService,
    private router: Router,
    private uniqueIdValidator: UniqueIdValidatorService
  ) {}

  ngOnInit(): void {
    this.productForm = this.createForm();

  }

  createForm(): FormGroup {
    const newForm = new FormGroup({

        id:new FormControl(
          '',
          {
            asyncValidators: [
              this.uniqueIdValidator.validate.bind(this.uniqueIdValidator),
            ],
            validators: [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(10),
            ],
            updateOn: 'blur',
          }
        ),
      name: new FormControl({ value: '', disabled: false }, [Validators.required]),
      logo: new FormControl({ value: '', disabled: false }, [Validators.required]),
      description: new FormControl({ value: '', disabled: false }, [Validators.required]),
      date_release: new FormControl({ value: '', disabled: false }, [Validators.required]),
      date_revision: new FormControl({ value: '', disabled: true })
    });

    return newForm;
  }

  submitForm(data: Product) {
    console.log(data);
    this.productService.sendProduct(data).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      }
    });
  }
}
