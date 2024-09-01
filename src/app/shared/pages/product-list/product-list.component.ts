import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  isMobile: boolean = false;
  isViewMenu: boolean = false;
  products = [
    { name: 'Product 1', category: 'Casual', brand: 'Mango', price: 25, color: 'Blue', size: 'M', image: 'assets/images/product.png' },
    // Adicione mais produtos conforme necessário
  ];

  brandFilter = '';
  models = [
    { name: 'Short', selected: false },
    { name: 'Short', selected: false },
    { name: 'Short', selected: false },
    { name: 'Short', selected: false },
    { name: 'Short', selected: false },
    // Adicione mais modelos conforme necessário
  ];

  styles = [
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    { name: 'Casual', selected: false },
    // Adicione mais estilos conforme necessário
  ];

  colors = ['#0000FF', '#FF0000', '#00FF00', '#FFFFF'];  // Exemplo de cores
  selectedColor = '';

  sizes = [
    { value: 'S', selected: false },
    { value: 'M', selected: false },
    { value: 'L', selected: false },
    { value: 'XL', selected: false }
  ];
  priceRange = [5, 500];

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 900;
  }

  showMenu(){
    alert(this.isViewMenu)
    this.isViewMenu = !this.isViewMenu;
  }

  filteredProducts() {
    return this.products.filter(product => {
      return (!this.brandFilter || product.brand.toLowerCase().includes(this.brandFilter.toLowerCase())) &&
             (!this.selectedColor || product.color === this.selectedColor) &&
             // Adicione mais filtros conforme a lógica desejada
             (product.price >= this.priceRange[0] && product.price <= this.priceRange[1]);
    });
  }
}
