import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with the first slide', () => {
    expect(component.currentIndex).toBe(0);
  });

  it('should go to the next slide when next is called', () => {
    const initialIndex = component.currentIndex;
    component.next();
    expect(component.currentIndex).toBe((initialIndex + 1) % component.slides.length);
  });

  it('should go to the previous slide when prev is called', () => {
    const initialIndex = component.currentIndex;
    component.prev();
    expect(component.currentIndex).toBe((initialIndex - 1 + component.slides.length) % component.slides.length);
  });

  it('should automatically slide after 5 seconds', (done) => {
    const initialIndex = component.currentIndex;
    setTimeout(() => {
      expect(component.currentIndex).toBe((initialIndex + 1) % component.slides.length);
      done();
    }, 5000);
  });

  it('should stop automatic sliding when destroyed', () => {
    component.ngOnDestroy();
    spyOn(window, 'clearInterval');
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it('should have a defined slides array', () => {
    expect(component.slides).toBeDefined();
    expect(component.slides.length).toBeGreaterThan(0);
  });
});
