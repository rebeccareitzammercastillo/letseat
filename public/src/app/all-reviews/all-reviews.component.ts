import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit {
  id: String;
  oneRestaurant: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        this.id=params['id']
        this.showRestaurantsFromService();
      });
    }
    showRestaurantsFromService(){
      let observable = this._httpService.showRestaurants(this.id);
      observable.subscribe(data => {console.log("Show from component!", data)
      this.oneRestaurant= data;
    });
    }
}
