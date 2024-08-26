import { Component, HostListener } from '@angular/core';
import { CarouselOfertsItem } from '../../models/carousel-oferts-item.model';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent {
  public assetsUrl: string;
  public imagesOferts: CarouselOfertsItem[];
  public isMobile: boolean = false;
  constructor() {
    this.assetsUrl = __webpack_public_path__;
    this.isMobile = window.innerWidth < 900;
    this.imagesOferts = [
      { image: this.assetsUrl + 'assets/images/banner.png' },
      { image: this.assetsUrl + 'assets/images/banner.png' },
      { image: this.assetsUrl + 'assets/images/banner.png' }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 900;
  }

}
