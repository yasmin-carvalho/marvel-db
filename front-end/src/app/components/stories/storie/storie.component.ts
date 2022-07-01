import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.css']
})
export class StorieComponent implements OnInit {

  storie: any;
  token: string = '';
  imgUrl: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private storiesService: StoriesService
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.keys.length > 0) {
      const tripToken = this.activatedRoute.snapshot.paramMap.get('id');
      this.token = tripToken || '';

      if(tripToken) {
        this.getStorie(tripToken);
      } 
    }
  }

  getStorie(id: any) {
    this.storiesService.searchStorie(id)
    .then((res:any) => {
      this.storie = res.data.results[0]
      console.log(this.storie)
      //this.imgUrl = this.character.thumbnail.path + "." + this.character.thumbnail.extension 
    })
  }

}
