import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(
    private http: HttpClient,
  ) { }

  public listCharacters(limit: number = 10, page: number = 1) {
    if(page == 0) {
      page = 1;
    }
    return this.http
      .get<Response>(`${environment.url_api}characters`, {
        headers: {},
        params : {
          ts : environment.ts,
          hash: environment.hash,
          apikey: environment.apikey,
          limit,
          orderBy:"name",
          offset: page - 1,
         }
      })
      .toPromise()
      .then((res: any) => res)
      .catch((error: Response) => error)
  }

  public searchWithName(limit: number = 10, page: number = 1, name: string) {
    return this.http
    .get<Response>(`${environment.url_api}characters`, {
      headers: {},
      params : {
        ts : environment.ts,
        hash: environment.hash,
        apikey: environment.apikey,
        limit,
        offset: page - 1,
        orderBy:"name",
        nameStartsWith : name,
      }
    })
    .toPromise()
    .then((res: any) => res)
    .catch((error: Response) => error)
  }
  
  public searchCharacter(id:number) {
    return this.http
      .get<Response>(`${environment.url_api}/characters/${id}`, {
        headers: {
          
        },
        params : {
          ts : environment.ts,
          hash: environment.hash,
          apikey: environment.apikey,
        }
      })
      .toPromise()
      .then((res: any) => res)
      .catch((error: Response) => error)
  }
}
