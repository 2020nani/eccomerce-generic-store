import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './shared/pages/pages.component';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
