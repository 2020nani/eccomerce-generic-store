import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { WalkthroughComponent } from './lib/walkthrough/walkthrough.component';

@NgModule({
  declarations: [AppComponent, WalkthroughComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
