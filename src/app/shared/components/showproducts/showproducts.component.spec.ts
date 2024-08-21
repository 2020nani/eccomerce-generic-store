import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowproductsComponent } from './showproducts.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

declare var __webpack_public_path__: any;

fdescribe('ShowproductsComponent', () => {
  let component: ShowproductsComponent;
  let fixture: ComponentFixture<ShowproductsComponent>;

  beforeEach(() => {
    // Mock da variável global
    __webpack_public_path__ = 'https://example.com/assets/';

    TestBed.configureTestingModule({
      declarations: [ ShowproductsComponent, ProductCardComponent ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
    FontAwesomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  fit('deve retornar o valor correto de assetsUrl', () => {
    expect(component.getAssetsUrl()).toBe('https://example.com/assets/');
  });
});
