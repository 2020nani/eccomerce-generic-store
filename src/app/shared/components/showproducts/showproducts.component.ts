import { Component } from '@angular/core';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent {
  public assetsUrl: string;
  constructor() {
    this.assetsUrl = __webpack_public_path__;
  }
  getAssetsUrl() {
    return this.assetsUrl;
  }

}
