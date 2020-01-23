import { RestaurantsNavigationComponent } from './components/restaurants-nevigation/restaurants-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularRestaurantsComponent } from './components/popular-restaurants/popular-restaurants.component';
import { SignatureDishesComponent } from './components/signature-dishes/signature-dishes.component';
import { IconsMeaningComponent } from './components/icons-meaning/icons-meaning.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { HttpClientModule } from '@angular/common/http';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 350,
  centeredSlides: true,
  navigation: true,
  pagination: true,
  keyboard: true,
};

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { OrderComponent } from './pages/order/order.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { PopularRestaurantBoxComponent } from './components/popular-restaurant-box/popular-restaurant-box.component';
import { DishPopupComponent } from './components/dish-popup/dish-popup.component';
import { SignatureDishesBoxComponent } from './components/signature-dishes-box/signature-dishes-box.component';
import { ChefRestaurantsBoxComponent } from './components/chef-restaurants-box/chef-restaurants-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PopularRestaurantsComponent,
    SignatureDishesComponent,
    IconsMeaningComponent,
    ChefOfTheWeekComponent,
    AboutComponent,
    FooterComponent,
    MenuComponent,
    HomePageComponent,
    RestaurantsComponent,
    RestaurantsNavigationComponent,
    RestaurantsListComponent,
    OrderComponent,
    RestaurantMenuComponent,
    RestaurantDetailsComponent,
    PopularRestaurantBoxComponent,
    DishPopupComponent,
    SignatureDishesBoxComponent,
    ChefRestaurantsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
