import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produc-card-top',
  templateUrl: './produc-card-top.component.html',
  styleUrl: './produc-card-top.component.css'
})
export class ProducCardTopComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() currentPrice!: number;
  @Input() originalPrice!: number;
  @Input() discount!: number;
  @Input() reviews!: number[];
}
