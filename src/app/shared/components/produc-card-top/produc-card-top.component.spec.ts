import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCardTopComponent } from './produc-card-top.component';

describe('ProducCardTopComponent', () => {
  let component: ProducCardTopComponent;
  let fixture: ComponentFixture<ProducCardTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducCardTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducCardTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
