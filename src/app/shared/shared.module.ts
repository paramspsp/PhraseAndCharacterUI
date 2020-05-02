import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [SuccessDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    MatDialogModule,
    SuccessDialogComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
