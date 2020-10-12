import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {
  baseUrl = "https://api.chucknorris.io/jokes";
  constructor(private http: HttpClient) { }
  async getRdnJoke():Promise<any>{
     return await this.http.get(this.baseUrl + '/random').toPromise();
  }
  async getCategories():Promise<any>{
    return await this.http.get(this.baseUrl + '/categories').toPromise();
  }

  async getJokeFromCat(givenCat) :Promise<any>{
    return await this.http.get(this.baseUrl + '/random?category=' + givenCat).toPromise();
  }

}
