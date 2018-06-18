import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // newsURL:string = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b36423060ee445679d14ec5788769728';
    // qnewsURL:string='https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=820dcbc697704cd68768c646c8d7e91c ';

    getNewsURL(topic:string){

       return 'https://newsapi.org/v2/top-headlines?q='+topic+'&apiKey=820dcbc697704cd68768c646c8d7e91c';

    }

  }
