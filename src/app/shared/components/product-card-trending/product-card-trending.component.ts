import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-trending',
  templateUrl: './product-card-trending.component.html',
  styleUrl: './product-card-trending.component.css'
})
export class ProductCardTrendingComponent {
  public assetsUrl: string;
  constructor() {
    this.assetsUrl = __webpack_public_path__;
  }
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: number;

}
