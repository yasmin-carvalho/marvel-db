import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {

  character: any;
  stories: any;
  creators: any;
  imgUrl: string = '';

  constructor(
    private charactersService: CharactersService,
    private storiesService: StoriesService
  ) { 

  }

  ngOnInit(): void {
  }

  getDataCharacter(value: any){
    if(value != '') {
        this.charactersService.searchCharacter(value)
        .then((res:any) => {
          this.character = res?.data.results[0];
          console.log(this.character)
          this.imgUrl = this.character.thumbnail.path + "." + this.character.thumbnail.extension 
        })
      } else {
        console.log('id invalido')
      }
    } 

    getCreator(storie?:any, tipo?: string){
      if(tipo == 'creator') {
        this.storiesService.getStorie(storie)
      .then((res:any) => {
        this.creators = res?.data.results[0];
        console.log(this.creators)
        })
      }

      if(tipo == 'storie') {
        this.storiesService.getStorie(storie)
      .then((res:any) => {
        this.stories = res?.data.results[0];
        console.log(this.stories)
      })
      }
      
    }
}
