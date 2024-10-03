import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
