import { ConfirmationGuard } from './guards/confirmation.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { PricePipe } from './shared/pipes/price.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { NoImageDirective } from './shared/directives/no-image.directive';
import { NumbersOnlyDirective } from './shared/directives/numbers-only.directive';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    CardComponent,
    PricePipe,
    ModalComponent,
    CartComponent,
    NoImageDirective,
    NumbersOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ConfirmationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
