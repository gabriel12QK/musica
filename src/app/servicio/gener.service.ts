import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenerService {

  constructor(private http:HttpClient) { }
  getgenero(){
    return this.http.get<any>('https://api.deezer.com/genre')
  }
}
