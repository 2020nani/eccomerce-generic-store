import { ProductListComponent } from './shared/pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './shared/pages/pages.component';
import { ProductDetailComponent } from './shared/pages/product-detail/product-detail.component';
import { AppReviewComponent } from './shared/pages/app-review/app-review.component';
import { AppDetailsComponent } from './shared/pages/app-details/app-details.component';
import { ShippingComponent } from './shared/pages/shipping/shipping.component';

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
    component: ProductDetailComponent,
    children: [
      {
        path: 'details',
        component: AppDetailsComponent
      },
      {
        path: 'reviews',
        component: AppReviewComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
