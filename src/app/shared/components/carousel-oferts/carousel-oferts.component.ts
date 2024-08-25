import { Component, Input } from '@angular/core';
import { CarouselOfertsItem } from '../../models/carousel-oferts-item.model';

@Component({
  selector: 'app-carousel-oferts',
  templateUrl: './carousel-oferts.component.html',
  styleUrl: './carousel-oferts.component.css'
})
export class CarouselOfertsComponent {
  @Input() imagesOferts!: CarouselOfertsItem[];
  currentIndex = 0;
  translateX = 0;

  next(): void {
    if(this.currentIndex === this.imagesOferts.length -1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }

  }

  prev(): void {
    if(this.currentIndex <= 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex -= 1;
    }
  }
}
