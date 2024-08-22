import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  public value: number = 0;
  public assetsUrl: string;
  constructor() {
    this.assetsUrl = __webpack_public_path__;
  }

  addProduct(price: number){
    alert('chamou mfe')
    this.value = this.value + price;
  }
}
