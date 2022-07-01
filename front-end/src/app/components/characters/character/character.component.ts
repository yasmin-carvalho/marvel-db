import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: any;
  token: string = '';
  imgUrl: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public characterService: CharactersService
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.keys.length > 0) {
      const tripToken = this.activatedRoute.snapshot.paramMap.get('id');
      this.token = tripToken || '';

      if(tripToken) {
        this.getCharacterData(tripToken);
      } 
    }
  }

  getCharacterData(id:any) {
    this.characterService.searchCharacter(id)
      .then((res:any) => {
        this.character = res?.data.results[0];
        console.log(this.character)
        this.imgUrl = this.character.thumbnail.path + "." + this.character.thumbnail.extension 
      })
  }


}
