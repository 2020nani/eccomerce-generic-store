import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardTrendingComponent } from './components/product-card-trending/product-card-trending.component';
import { ProducCardTopComponent } from './components/produc-card-top/produc-card-top.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BannerPromotionComponent } from './components/banner-promotion/banner-promotion.component';
import { CarouselOfertsComponent } from './components/carousel-oferts/carousel-oferts.component';

@NgModule({
  declarations: [
    PagesComponent,
    CarouselComponent,
    ShowproductsComponent,
    ProductCardComponent,
    ProductCardTrendingComponent,
    ProducCardTopComponent,
    BannerPromotionComponent,
    CarouselOfertsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  exports: [
    PagesComponent,
    CarouselComponent,
    ShowproductsComponent,
    ProductCardComponent,
    ProductCardTrendingComponent,
    ProducCardTopComponent,
    BannerPromotionComponent,
    CarouselOfertsComponent,
    CheckoutComponent,
  ]
})
export class SharedModule { }
