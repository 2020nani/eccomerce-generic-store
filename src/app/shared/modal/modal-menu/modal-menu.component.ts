import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrl: './modal-menu.component.css'
})
export class ModalMenuComponent {
  isMenuVisible = false;

  constructor(private router: Router) {}

  showMenu() {
    this.isMenuVisible = true;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }

  navigateToStore() {
    this.isMenuVisible = false;
    this.router.navigate(['store/products']);
  }
}
