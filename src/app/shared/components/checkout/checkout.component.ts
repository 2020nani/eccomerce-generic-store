import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  public value: number = 0;
  public isMobile: boolean = false;
  constructor() {
    this.isMobile = window.innerWidth < 900;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 900;
  }

  addProduct(price: number){
    this.value = this.value + price;
  }
}
