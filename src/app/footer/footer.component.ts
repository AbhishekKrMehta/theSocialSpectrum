import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AddLanguageComponent } from "./add-language/add-language.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  constructor(public dialog: MatDialog){}

  addLanguage(){
    
      this.dialog.open(AddLanguageComponent, {
      width: '500px'       
      });
      
  
  }

}
