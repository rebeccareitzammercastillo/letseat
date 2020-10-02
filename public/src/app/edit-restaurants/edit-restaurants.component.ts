import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-restaurants',
  templateUrl: './edit-restaurants.component.html',
  styleUrls: ['./edit-restaurants.component.scss']
})
export class EditRestaurantsComponent implements OnInit {
  errors=[];
  id: String;
  oneRestaurant: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
    this.id=params['id']
    this.showRestaurantsFromService();
  });
}
  editRestaurantsFromService() {
    console.log("************************component")
    let observable = this._httpService.editRestaurants(this.id, this.oneRestaurant);
    observable.subscribe(data =>{
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
      console.log("edit from component", data);
      this.oneRestaurant = { name:"", cuisine:""}
      this._router.navigate(['/']);
      }
    })
  }
  showRestaurantsFromService(){
    let observable = this._httpService.showRestaurants(this.id);
    observable.subscribe(data => {console.log("Show from component!", data)
    this.oneRestaurant= data;
  });
  }
}
