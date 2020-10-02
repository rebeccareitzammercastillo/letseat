import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-reviews',
  templateUrl: './create-reviews.component.html',
  styleUrls: ['./create-reviews.component.scss']
})
export class CreateReviewsComponent implements OnInit {
  id: String;
  oneRestaurant: any;
  newReview: any;
  newName: any;
  newStars: any;
  oneReview: any;
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.showRestaurantsFromService();
    });
  }

  showRestaurantsFromService() {
    let observable = this._httpService.showRestaurants(this.id);
    observable.subscribe(data => {
      console.log("Show from component!", data)
      this.oneRestaurant = data;
    });
  }

  createReviewsFromService() {
    this.oneReview = {
      cname: this.newName,
      stars: this.newStars,
      review: this.newReview
    }
    console.log("******************one.review")
    console.log(this.oneReview)
    console.log("******************create before the let")
    let observable = this._httpService.createReviews(this.id, this.oneReview);
    observable.subscribe(data => {
      console.log(data)
      console.log("******************after observable")
      this.errors = [];
      //@ts-ignore
      if (data.errors) {
        //@ts-ignore
        for (var i in data.errors) {
          //@ts-ignore
          console.log(data.errors[i])
          //@ts-ignore
          this.errors.push(data.errors[i].properties.message)
        }
      } else {
        console.log("You got a new Review!", data)
        // this.showRestaurantsFromService();
        this._router.navigate([`/reviews/${this.id}`]);
      }
    });
  }
}

