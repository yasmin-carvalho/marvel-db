import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  //timestamp = Math.floor((Date.now()) / 1000)
  timestamp = "1656299330";
  privateKey = "12245d916efadbed9a74817fe1e67e5e0324adad"
  publicKey = "bf71f646d75c6c4daab2b432988f7278";

  hash = "b6dfb0a6a000623a87bc42a157002201"

  constructor(
    private http: HttpClient,
  ) { }

  public listStories(limit: number = 10, page: number = 1, title?: string) {
    let params : any
    if(page == 0){
      page = 1
    }

    if(title){
      params = {
        ts : environment.ts,
        hash: environment.hash,
        apikey: environment.apikey,
        limit,
        offset: page - 1,
        orderBy:"modified",
        title
       }
    } else {
      params = {
        ts : environment.ts,
        hash: environment.hash,
        apikey: environment.apikey,
        limit,
        offset: page - 1,
        orderBy:"modified"
       }
    }

    return this.http
      .get<Response>(`${environment.url_api}/stories`, {
        headers: {
          
        },
        params : params
      })
      .toPromise()
      .then((res: any) => res)
      .catch((error: Response) => error)
  }

  searchStorie(id:number) {
    return this.http
      .get<Response>(`${environment.url_api}stories/${id}`, {
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

  getStorie(storie: any) {
    return this.http
      .get<Response>(`${storie}`, {
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
