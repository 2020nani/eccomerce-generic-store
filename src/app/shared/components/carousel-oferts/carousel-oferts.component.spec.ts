import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOfertsComponent } from './carousel-oferts.component';

describe('CarouselOfertsComponent', () => {
  let component: CarouselOfertsComponent;
  let fixture: ComponentFixture<CarouselOfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselOfertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselOfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
