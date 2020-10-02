import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { CreateRestaurantsComponent } from './create-restaurants/create-restaurants.component';
import { EditRestaurantsComponent } from './edit-restaurants/edit-restaurants.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CreateReviewsComponent } from './create-reviews/create-reviews.component';


const routes: Routes = [
  //all restaurants route
  {path: '', component: AllRestaurantsComponent},
  //create a restaurant route
  {path: 'new', component: CreateRestaurantsComponent},
  //edit a restaurant route
  {path: 'edit/:id', component: EditRestaurantsComponent},
  //all reviews route
  {path: 'reviews/:id', component: AllReviewsComponent},
  //create review
  {path: 'create/:id', component: CreateReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
