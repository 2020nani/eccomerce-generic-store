import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  public isMobile: boolean = false;
  constructor(){
    this.isMobile = window.innerWidth < 900
  }

}
