import { Component, HostListener } from '@angular/core';
import { CarouselOfertsItem } from '../../models/carousel-oferts-item.model';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent {
  public imagesOferts: CarouselOfertsItem[];
  public isMobile: boolean = false;
  constructor() {
    this.isMobile = window.innerWidth < 900;
    this.imagesOferts = [
      { image: 'assets/images/banner.png' },
      { image: 'assets/images/banner.png' },
      { image: 'assets/images/banner.png' }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 900;
  }

}
