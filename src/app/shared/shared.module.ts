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

@NgModule({
  declarations: [
    PagesComponent,
    CarouselComponent,
    ShowproductsComponent,
    ProductCardComponent
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
    ProductCardComponent
  ]
})
export class SharedModule { }
