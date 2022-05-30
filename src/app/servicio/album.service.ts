import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  getalbum (id:string){
    return this.http.get<any>('https://api.deezer.com/album/' + id)
  }
}
