import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  readonly BASE_URL = "https://rickandmortyapi.com/api/character"

  getAPI(){
    return this.http.get<any>(this.BASE_URL)
  }
}
