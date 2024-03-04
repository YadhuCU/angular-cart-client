import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { UserCartComponent } from './components/user-cart/user-cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AllProductsComponent,
    ViewProductComponent,
    UserCartComponent,
    WishlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
