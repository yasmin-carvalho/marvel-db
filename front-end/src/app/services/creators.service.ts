import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  constructor(
    private http: HttpClient
  ) { }

  public listCreators(limit: number = 10, page: number = 1, firstName?: string) {
    let params : any
    if(page == 0){
      page = 1
    }

    if(firstName){
      params = {
        ts : environment.ts,
        hash: environment.hash,
        apikey: environment.apikey,
        limit,
        offset: page - 1,
        firstName
       }
    } else {
      params = {
        ts : environment.ts,
        hash: environment.hash,
        apikey: environment.apikey,
        limit,
        offset: page - 1,
       }
    }
    

    return this.http
      .get<Response>(`${environment.url_api}/creators`, {
        headers: {
          
        },
        params : params
      })
      .toPromise()
      .then((res: any) => res)
      .catch((error: Response) => error)
  }

  public searchCreator(id: number ) {
    return this.http
      .get<Response>(`${environment.url_api}creators/${id}`, {
        headers: {
          
        },
        params : {
          ts : environment.ts,
          hash: environment.hash,
          apikey: environment.apikey
        }
      })
      .toPromise()
      .then((res: any) => res)
      .catch((error: Response) => error)
  }

}
