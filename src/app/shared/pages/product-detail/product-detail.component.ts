import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  public isShowMore: boolean = false;


  showMore(){
    this.isShowMore = !this.isShowMore
  }
}
