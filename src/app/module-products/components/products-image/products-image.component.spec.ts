import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsImageComponent } from './products-image.component';

describe('ProductsImageComponent', () => {
  let component: ProductsImageComponent;
  let fixture: ComponentFixture<ProductsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsImageComponent]
    });
    fixture = TestBed.createComponent(ProductsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
