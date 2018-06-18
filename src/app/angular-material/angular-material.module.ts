import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatRadioModule,
        MatSelectModule,
        MatCardModule
      } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatTooltipModule,MatDialogModule,MatInputModule,MatSnackBarModule,MatFormFieldModule,MatProgressBarModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,MatTabsModule,MatRadioModule,MatSelectModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatTooltipModule,MatDialogModule,MatInputModule,MatSnackBarModule,MatFormFieldModule,MatProgressBarModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,MatTabsModule,MatRadioModule,MatSelectModule,MatCardModule],
  declarations: []
})
export class AngularMaterialModule { 

}
