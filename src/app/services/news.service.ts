import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions  } from '@angular/http';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class NewsService {

  constructor( private http:Http,
               private configuration:ConfigurationService ) { }

  getNews(keyWord:string){
    
    var newsURL:string = this.configuration.getNewsURL(keyWord);
    return this.http
    .get( newsURL )
    .map( (response: Response) => { return response.json() } )
    
  }

}
