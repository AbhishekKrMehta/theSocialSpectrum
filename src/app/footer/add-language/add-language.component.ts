import { Component, OnInit } from '@angular/core';

import { MatDialog,MatDialogRef,MatDialogConfig,MatSnackBar} from '@angular/Material';

import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent{

  constructor(public dialogRef: MatDialogRef<AddLanguageComponent>,public snackBar: MatSnackBar,
  ){}

  language = new FormControl('', [Validators.required]);

  onSubmit(){
    this.dialogRef.close();
  }

  openSnackBar() {
    this.snackBar.open("Thanks! We appreciate your feedback.", null, {
      duration: 2500,
      extraClasses: ['success']
    });
  }

  getErrorMessage() {
    return this.language.hasError('required') ? 'Mandatory field':''
              
  }
 
}
