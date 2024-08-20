import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
  promotionTitle: string;
  promotionSubtitle: string;
  promotionPeriod: string;
  ctaText: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'http://localhost:4201/assets/images/summer.png',
      title: 'KIMONOS, CAFTANS & PAREOS',
      description: 'Poolside glam included From $4.99',
      promotionTitle: 'Summer Essentials',
      promotionSubtitle: '20% off',
      promotionPeriod: '19 Jul-30 Jul',
      ctaText: 'SHOP NOW'
    },
    {
      image: 'http://localhost:4201/assets/images/summer.png',
      title: 'KIMONOS, CAFTANS & PAREOS',
      description: 'Poolside glam included From $4.99',
      promotionTitle: 'Summer Essentials',
      promotionSubtitle: '20% off',
      promotionPeriod: '19 Jul-30 Jul',
      ctaText: 'SHOP NOW'
    },{
      image: 'assets/images/logo.png',
      title: 'KIMONOS, CAFTANS & PAREOS',
      description: 'Poolside glam included From $4.99',
      promotionTitle: 'Summer Essentials',
      promotionSubtitle: '20% off',
      promotionPeriod: '19 Jul-30 Jul',
      ctaText: 'SHOP NOW'
    },

  ];

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  next(): void {
    if(this.currentIndex === this.slides.length -1) {
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

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
