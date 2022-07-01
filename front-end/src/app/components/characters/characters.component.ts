import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters =  new MatTableDataSource<any>([]);
  charactersColumns: Array<any>;
  charactersHeaders: Array<string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  search2: any;
  resultsLength:number = 0;
  limit: number = 10;
  page: number = 0;
  editing: boolean = false;

  constructor(
    public charactersService: CharactersService,
    private router: Router,
  ) {
    this.charactersHeaders = ['id', 'name',  'actions'];
    this.charactersColumns = [
      {
        label: 'id',
        property: 'id',
        type: 'text',
      },
      {
        label: 'Nome',
        property: 'name',
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
    this.getCharacters();

  }

  getCharacters(event?: PageEvent){ 
    this.limit = event?.pageSize  ? event?.pageSize: this.limit;
    this.page = event?.pageIndex ? ((event?.pageIndex )* this.limit) : 0;
    this.charactersService
      .listCharacters(this.limit, this.page)
      .then((res:any) => {
        this.characters = new MatTableDataSource(res?.data.results);
        this.resultsLength = res?.data.total;
        this.page += this.limit;
        this.paginator.pageIndex = (this.page / this.limit) - 1
      })
  }

  viewCharacterInfo(id:number) {
    this.router.navigate(['/characters/view', id]);
  }

  public characterSearch(name: string) {
    if(name !== ''){
      this.charactersService
        .searchWithName(this.limit * this.page, this.page, name)
        .then((res:any) => {
          this.characters = new MatTableDataSource(res.data.results);
          this.resultsLength = res?.data.total;
          this.page = res.data.offset + 1;
          this.paginator.pageIndex = res.data.offset
        })
    } else {
      this.getCharacters();
    }

  }
}
