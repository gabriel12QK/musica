import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { MusicaService } from 'src/app/servicio/musica.service';
import { AlbumService } from 'src/app/servicio/album.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  mus:any;
  alb:any;
  
  constructor(private _musica:MusicaService, private _album: AlbumService) { }

  ngOnInit(): void {
  }
  getmusic(name:any){
    this._musica.getmusic(name.value).subscribe
    ({   
       next:(s)=>{
         this.mus=s.data;
       /*this.alb=this.mus.filter((_alb: any) => 
       { for (var ib = 0; ib <= this.mus.length; ib++) 
        {
        for (var j = 0; j < this.mus.length - 1; j++) 
        {
          if (ib != j) 
          {
            if (this.mus.album.id[ib] != this.mus.album.id[j])
             {
             return this.mus.album.id;
            } 
          } 
        }
        }
       } )*/
       console.log(this.alb)
       },
       error:(_e)=>{
       debugger
       }
    })
  }
  
  /*getalbum(id:any){
    this._album.getalbum(id.value).subscribe
    ({   
       next:(s)=>{
         this.alb=s.tracks;
       
       },
       error:(_e)=>{
       debugger
       }
    })*/
  
  }

  
  
  



