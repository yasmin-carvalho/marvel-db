import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CreatorsService } from 'src/app/services/creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators =  new MatTableDataSource<any>([]);
  creatorsColumns: Array<any>;
  creatorsHeaders: Array<string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  search2: any;
  resultsLength:number = 0;
  limit: number = 10;
  page: number = 1;
  editing: boolean = false;

  constructor( 
    public creatorsService: CreatorsService,
    private router: Router,
    ) {
      this.creatorsHeaders = ['id', 'firstName', 'actions'];
      this.creatorsColumns = [
        {
          label: 'id',
          property: 'id',
          type: 'text',
        },
        {
          label: 'Nome',
          property: 'firstName',
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
      this.getCreators();
  
    }
  
    getCreators(event?: PageEvent){ 
      this.limit = event?.pageSize  ? event?.pageSize : this.limit;
      this.page = event?.pageIndex ? ((event?.pageIndex )* this.limit) : 0;
      this.creatorsService
        .listCreators(this.limit, this.page)
        .then((res:any) => {
          this.creators = new MatTableDataSource(res.data.results);
          this.resultsLength = res.data.total;
          this.page += this.limit;
          this.paginator.pageIndex = (this.page / this.limit) - 1
        })
    }
  
    viewCreatorInfo(id:number) {
      this.router.navigate(['/creators/view', id]);
    }
  
    public creatorSearch(value: any) {
      this.creatorsService
        .listCreators(this.limit, this.page, value)
        .then((res:any) => {
          this.creators = new MatTableDataSource(res.data.results);
          this.resultsLength = res.data.total;
          this.page = res.data.offset + 1;
          this.paginator.pageIndex = res.data.offset
        })
  
    }
  }