import { AssetsUrlPipe } from './pipes/assets-url.pipe';
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
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckboxControlValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalMenuComponent } from './modal/modal-menu/modal-menu.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { AppReviewComponent } from './pages/app-review/app-review.component';
import { ShippingComponent } from './pages/shipping/shipping.component';

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
    CheckoutComponent,
    ProductListComponent,
    ModalMenuComponent,
    ProductDetailComponent,
    AppReviewComponent,
    ShippingComponent,
    AssetsUrlPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
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
    ProductListComponent,
    ProductDetailComponent,
    ModalMenuComponent,
    ShippingComponent,
    AppReviewComponent
  ]
})
export class SharedModule { }
