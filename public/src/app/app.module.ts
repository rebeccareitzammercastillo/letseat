import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { CreateRestaurantsComponent } from './create-restaurants/create-restaurants.component';
import { EditRestaurantsComponent } from './edit-restaurants/edit-restaurants.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CreateReviewsComponent } from './create-reviews/create-reviews.component'

@NgModule({
  declarations: [
    AppComponent,
    AllRestaurantsComponent,
    CreateRestaurantsComponent,
    EditRestaurantsComponent,
    AllReviewsComponent,
    CreateReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
