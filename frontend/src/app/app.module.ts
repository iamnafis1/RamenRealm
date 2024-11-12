import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/partial/headers/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './components/partial/star-rating/star-rating.component';
import { SearchComponent } from './components/partial/search/search.component';
import { TagsComponent } from './components/partial/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { FooterComponent } from './components/partial/footer/footer.component';
import { TitleComponent } from './components/partial/title/title.component';
import { NotFoundComponent } from './components/partial/not-found/not-found.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginPageComponent } from './components/pages/login-page/login-page.component'
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InputContainerComponent } from './components/partial/input-container/input-container.component';
import { InputValidationComponent } from './components/partial/input-validation/input-validation.component';
import { TextInputComponent } from './components/partial/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partial/default-button/default-button.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoadingComponent } from './components/partial/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partial/order-items-list/order-items-list.component';
import { MapComponent } from './components/partial/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartComponent,
    FooterComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    }),// will be se for current project 

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
