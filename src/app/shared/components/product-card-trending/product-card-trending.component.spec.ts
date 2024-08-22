import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardTrendingComponent } from './product-card-trending.component';

describe('ProductCardTrendingComponent', () => {
  let component: ProductCardTrendingComponent;
  let fixture: ComponentFixture<ProductCardTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardTrendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
