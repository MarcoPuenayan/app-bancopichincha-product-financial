import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.scss']
})
export class ProductsImageComponent {
  @Input() imagenSrc = '';
}
