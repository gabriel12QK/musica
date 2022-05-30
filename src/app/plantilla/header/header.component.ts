import { Component, OnInit } from '@angular/core';
import { GenerService } from 'src/app/servicio/gener.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genero:any;
  constructor( private _genero:GenerService) { }

  ngOnInit(): void {
  }
  getgenero(){
    this._genero.getgenero().subscribe
    ({   
       next:(s)=>{
         this.genero=s.data;
         console.log(this.genero)
       },
       error:(_e)=>{
       debugger
       }
    })
  }
}
