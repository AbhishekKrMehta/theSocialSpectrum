import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(private getNews:NewsService,
              public snackBar:MatSnackBar,) { 

    this.displayNews('new');
    const fragment = document.createRange().createContextualFragment('<script src="//www.powr.io/powr.js?external-type=html"></script><div class="powr-weather" id="9e9bb921_1515835317"></div>');


    setTimeout(function(){ 
      document.getElementById('weatherWidget').appendChild(fragment)
      console.log('inside timeout')
     }, 1000);

     this.snackBar.open("Loading...", null, {
      duration: 3500,
      extraClasses: ['success']
    });

  }

  News:any=[];
  keyWord:string;

  search(e,keyWord){
    if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that run
      this.displayNews(keyWord);
  }
  }

  displayNews(kWord:string){
    
    this.keyWord=kWord;
    this.getNews.getNews(kWord).subscribe(
      data=>{  
        this.News=data.articles;
        
      }
    )}

    
}
