import { ProductListComponent } from './shared/pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './shared/pages/pages.component';
import { ProductDetailComponent } from './shared/pages/product-detail/product-detail.component';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
