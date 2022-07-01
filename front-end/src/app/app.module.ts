import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MoviesComponent } from './components/movies/movies.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/characters/character/character.component';
import { CreatorComponent } from './components/creators/creator/creator.component';
import { StorieComponent } from './components/stories/storie/storie.component';
import { SearchInfoComponent } from './components/search-info/search-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    StoriesComponent,
    CharactersComponent,
    MoviesComponent,
    CreatorsComponent,
    CharacterComponent,
    CreatorComponent,
    StorieComponent,
    SearchInfoComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule ,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
