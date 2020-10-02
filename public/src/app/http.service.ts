import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    console.log("index/all from service")
    return this._http.get('/restaurants')
  }

  createRestaurants(newRestaurant){
    console.log("Create from Service")
    return this._http.post('/restaurants', newRestaurant)
  }

  editRestaurants(id, oneRestaurant){
    console.log("edit from service")
    return this._http.post(`/restaurants/${id}/edit`, oneRestaurant)
  }

  showRestaurants(id){
    console.log("show from service")
    return this._http.get(`/restaurants/${id}`)
  }

  deleteRestaurants(id){
    console.log("delete from service")
    return this._http.delete(`/restaurants/${id}/delete`)
  }

  createReviews(id, oneReview){
    return this._http.post(`/restaurants/${id}/reviews`, oneReview)
  }

}
