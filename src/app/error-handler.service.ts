import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "./shared/dialogs/error-dialog/error-dialog.component";

@Injectable()
export class ErrorHandlerService {
  public errorMessage: string = '';
  public dialogConfig;

  constructor(private router: Router, private dialog: MatDialog) { }

  public handleError(error: HttpErrorResponse){
    console.log("Calling handleError"+error.status);
    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else if(error.status === 400){
      this.handleOtherError(error)
    }
    else{
      this.handleOtherError(error);
    }
  }

  private handle500Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  private handle404Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  private handleOtherError(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }

  private createErrorMessage(error: HttpErrorResponse){
    if(error.status==400){
      this.errorMessage = "Server Returned the 400 error! Bad Request";
    }else{
      this.errorMessage = error.error ? error.error : error.statusText;
    }
  }

}
