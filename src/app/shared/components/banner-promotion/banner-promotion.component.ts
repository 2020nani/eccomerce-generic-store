import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-promotion',
  templateUrl: './banner-promotion.component.html',
  styleUrl: './banner-promotion.component.css'
})
export class BannerPromotionComponent {
  @Input() imageUrl!: string;
  @Input() imageUrl2!: string;
}
