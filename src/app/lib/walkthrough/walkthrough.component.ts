import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.component.html',
  styleUrl: './walkthrough.component.css'
})
export class WalkthroughComponent {
  public steps: { title: string; content: string; selector: string }[] = [
    { title: "Sejam bem vindos a nossa loja virtual", content: "Estamos aqui para servi-los sempre", selector: "#step1" },
    { title: "Seja nosso cliente", content: "teste", selector: "#step2" }
  ];
  showTour = false;
  currentStep = 0;
  highlightedElement: HTMLElement | null = null;
  currentStepTitle: string = '';
  currentStepContent: string = '';
  currentStepStyle: any = '';

  constructor(private renderer: Renderer2) {
    this.currentStepTitle = this.steps[this.currentStep]?.title || '';
    this.currentStepContent = this.steps[this.currentStep]?.content || '';
  }

  getCurrentStepStyle() {
    const element = document.querySelector(
      this.steps[this.currentStep].selector
    ) as HTMLElement;
    if (element) {
      const rect = element.getBoundingClientRect();
      // Remove previous highlight
      if (this.highlightedElement) {
        this.renderer.removeClass(this.highlightedElement, 'highlight');
        this.renderer.removeClass(
          this.highlightedElement,
          'disable-interaction'
        );
      }
      this.highlightedElement = element;
      this.renderer.addClass(this.highlightedElement, 'highlight');
      this.renderer.addClass(this.highlightedElement, 'disable-interaction');
      // Calculate position for popup
      return {
        position: 'absolute',
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        background: '#fff',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: 'none', // Remove shadow from popup
      };
    }
    return {};
  }

  setSteps(steps: { title: string; content: string; selector: string }[]){
    this.steps = steps;
  }

  startTour() {
    this.showTour = true;
  }

  nextStep() {
    this.currentStep++;
    if (this.currentStep >= this.steps.length) {
      this.showTour = false;
      this.currentStep = 0;
      if (this.highlightedElement) {
        this.renderer.removeClass(this.highlightedElement, 'highlight');
      }
    }
  }
}
