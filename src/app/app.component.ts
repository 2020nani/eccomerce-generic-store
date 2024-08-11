import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public assetsUrl: string;
  constructor() {
    this.assetsUrl = __webpack_public_path__;
  }
  getAssetsUrl() {
    return this.assetsUrl;
  }
}
