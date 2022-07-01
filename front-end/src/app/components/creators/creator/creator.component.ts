import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatorsService } from 'src/app/services/creators.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  creator: any;
  token: string = '';
  imgUrl: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private creatorsService: CreatorsService
  ) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.keys.length > 0) {
      const tripToken = this.activatedRoute.snapshot.paramMap.get('id');
      this.token = tripToken || '';

      if(tripToken) {
        this.getCreatorData(tripToken);
      } 
    }
  }

  getCreatorData(id:any) {
    this.creatorsService.searchCreator(id)
      .then((res:any) => {
        this.creator = res.data.results[0]
        console.log(this.creator)
        this.imgUrl = this.creator.thumbnail.path + "." + this.creator.thumbnail.extension 
      })
  }

}
