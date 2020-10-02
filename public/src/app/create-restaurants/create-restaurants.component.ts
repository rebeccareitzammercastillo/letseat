import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurants',
  templateUrl: './create-restaurants.component.html',
  styleUrls: ['./create-restaurants.component.scss']
})
export class CreateRestaurantsComponent implements OnInit {
  newRestaurant: any;
  errors=[];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newRestaurant = {name:"", cuisine:""}
  }

  createRestaurantsFromService(){
    console.log("**************************component")
    let observable = this._httpService.createRestaurants(this.newRestaurant);
    observable.subscribe(data=>{
      //@ts-ignore
      if (data.errors){
        //@ts-ignore
        for(var i in data.errors){
          //@ts-ignore
          console.log(data.errors[i])
          //@ts-ignore
          this.errors.push(data.errors[i].properties.message)
        }
      }else{
      console.log("Create from the component", data);
      this.newRestaurant = {name:"", cuisine:""}
      this._router.navigate(['/']);
      }
  })
  }
}
