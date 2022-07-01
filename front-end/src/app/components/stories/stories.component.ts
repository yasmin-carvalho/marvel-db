import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories =  new MatTableDataSource<any>([]);
  storiesColumns: Array<any>;
  storiesHeaders: Array<string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  resultsLength:number = 0;
  limit: number = 10;
  page: number = 1;
  editing: boolean = false;
  constructor(
    public storiesService: StoriesService,
    private router: Router,
    ) {
    this.storiesHeaders = ['id', 'title', 'type',  'actions'];
    this.storiesColumns = [
      {
        label: 'id',
        property: 'id',
        type: 'text',
      },
      {
        label: 'Titulo',
        property: 'title',
        type: 'text',
      },
      {
        label: 'Tipo',
        property: 'type',
        type: 'text',
      },
      {
        label: 'Ações',
        property: 'actions',
        type: 'button',
      },
    ];
   }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(event?: PageEvent){ 
    this.limit = event?.pageSize  ? event?.pageSize : this.limit;
    this.page = event?.pageIndex ? ((event?.pageIndex )* this.limit) : 0;
    this.storiesService
      .listStories(this.limit, this.page)
      .then((res:any) => {
        this.stories = new MatTableDataSource(res.data.results);
        this.resultsLength = res.data.total;
        this.page += this.limit;
        this.paginator.pageIndex = (this.page / this.limit) - 1
        
      })
  }

  public storiesSearch(value: any) {
    this.storiesService
    .listStories(this.limit, this.page, value)
    .then((res:any) => {
      this.stories = new MatTableDataSource(res.data.results);
      this.resultsLength = res.data.total;
        this.page = res.data.offset + 1;
        this.paginator.pageIndex = res.data.offset
      
    })

  }

  visulizeStorie(id:number){
    this.router.navigate(['/stories/view', id]);
  }

}
