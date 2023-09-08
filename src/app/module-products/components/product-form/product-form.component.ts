import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { UniqueIdValidatorService } from '../../services/unique-id-validator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() title: string = 'Titulo';

  @Input() mode: string = 'new'; // or edit;

  productForm: FormGroup = new FormGroup({});

  @Input() product: Product = {} as Product;

  @Output() submitForm = new EventEmitter();

  currentDate: string | null = null;
  private dateReleaseSubscription?: Subscription;
  ngOnInit(): void {
    if (this.isModeEdit) {
      this.product.date_release = this.product.date_release.split('T')[0];
      this.product.date_revision = this.product.date_revision.split('T')[0];
    }
    this.productForm = this.createForm();
    this.currentDate = new Date().toJSON().split('T')[0];

    this.dateReleaseSubscription=this.productForm.get('date_release')?.
    valueChanges.subscribe((value)=>{
      if (value) {
        const date = new Date(value);
        if (date) {
          date.setFullYear(date.getFullYear() + 1);
          const dateAsString = date.toISOString().substring(0, 10);
          this.productForm.patchValue({
            date_revision: dateAsString,
          });
        }
      } else {
        this.productForm.patchValue({
          date_revision: null,
        });
      }
    })
  }

  onChangeRelease(event: any) {
    const date = new Date(event.target.value);
    date.setFullYear(date.getFullYear() + 1);
    this.productForm.controls['date_revision'].setValue(
      date.toISOString().split('T')[0]
    );
  }
  constructor(private uniqueIdValidator: UniqueIdValidatorService) {}
  createForm(): FormGroup {
    const newForm = new FormGroup({
      id: new FormControl(
        { value: this.isModeEdit ? this.product.id : '', disabled: this.isModeEdit },
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
      name: new FormControl({ value: this.isModeEdit ? this.product.name : '', disabled: false }, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      logo: new FormControl({ value: this.isModeEdit ? this.product.logo : '', disabled: false }, [
        Validators.required,
      ]),
      description: new FormControl({ value: this.isModeEdit ? this.product.description :'', disabled: false }, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      date_release: new FormControl({ value: this.isModeEdit ? this.product.date_release : '', disabled: false }, [
        Validators.required,
      ]),
      date_revision: new FormControl({ value: this.isModeEdit ? this.product.date_revision : '', disabled: true }),
    });

    return newForm;
  }

  sendData() {
    this.submitForm.emit(this.productForm.getRawValue());
  }

  restartForm() {
    this.productForm.reset();
  }

  get id() {
    return this.productForm.get('id');
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get date_release() {
    return this.productForm.get('date_release');
  }

  get logo() {
    return this.productForm.get('logo');
  }

  get isModeEdit() {
    return this.mode === 'edit'
  }
}
