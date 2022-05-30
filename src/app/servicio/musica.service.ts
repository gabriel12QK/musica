import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicaService {
 
  constructor(private http:HttpClient) { }
  getmusic (nom:string){
    return this.http.get<any>('https://api.deezer.com/search?q='+ nom)
  }
}
