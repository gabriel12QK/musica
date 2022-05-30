import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { SlideComponent } from './plantilla/slide/slide.component';
import { MusicComponent } from './plantilla/music/music.component';
import { AboutComponent } from './plantilla/about/about.component';
import { Music1Component } from './plantilla/music1/music1.component';
import { VideoComponent } from './plantilla/video/video.component';
import { ContactComponent } from './plantilla/contact/contact.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { GallerComponent } from './plantilla/galler/galler.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbmusComponent } from './paginas/albmus/albmus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    MusicComponent,
    AboutComponent,
    Music1Component,
    VideoComponent,
    ContactComponent,
    FooterComponent,
    GallerComponent,
    AlbmusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
