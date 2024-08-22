import { Component, Input } from '@angular/core';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() currentPrice!: number;
  @Input() originalPrice!: number;
  @Input() discount!: number;
  @Input() reviews!: number[];


  hours!: number;
  minutes!: number;
  seconds!: number;
  private targetTime!: number;
  faStar = faStar;
  faStarEmpty = faStarEmpty;

  ngOnInit() {
    this.setInitialCountdown(10);  // Inicia o contador com 10 horas
    this.startCountdown();

  }

  getRating(){
    const totalReviews = this.reviews.length;
    const sumOfRatings = this.reviews.reduce((sum, rating) => sum + rating, 0);
    const averageRating = sumOfRatings / totalReviews;
    return Math.round(averageRating)
  }

  setInitialCountdown(hours: number) {
    const now = new Date().getTime();
    this.targetTime = now + hours * 60 * 60 * 1000;  // Define o horário final em milissegundos
  }

  startCountdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = this.targetTime - now;

      if (timeRemaining > 0) {
        this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      } else {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }
}
