import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeednewsapiservicesService {

  constructor(private _http:HttpClient) { }


  //Api link
  feedNewsAoiUrl = "https://newsapi.org/v2/top-headlines?country=za&apiKey=690c6dfc42ac4784915c8b9adde1dd0";

 //tech api
 technewsapi = "https://newsapi.org/v2/top-headlines?country=za&category=technology&apiKey=690c6dfc42ac4784915c8b9adde1dd05";

  //Top heading
  topHeadlines():Observable<any>{
    return this._http.get(this.feedNewsAoiUrl);
  }

  //Tech news
  techNews():Observable<any>{
    return this._http.get(this.technewsapi);
  }
}
