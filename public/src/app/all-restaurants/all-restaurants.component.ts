import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit {
  restaurants=[];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.restaurantsFromService();
  }
  
  restaurantsFromService(){
    console.log("**************************component")
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {console.log("All businesses from component!", data)
    this.restaurants = data['restaurants'];
  });
}
deleteRestaurantsFromService(id) {
  let observable = this._httpService.deleteRestaurants(id);
  observable.subscribe(data =>{console.log("data from delete", data);
  this.restaurantsFromService();
  })
}
}
