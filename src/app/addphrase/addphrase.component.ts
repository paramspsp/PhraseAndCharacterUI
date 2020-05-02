import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhraseService} from "../phrase.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {SuccessDialogComponent} from "../shared/dialogs/success-dialog/success-dialog.component";
import {ErrorHandlerService} from "../error-handler.service";

@Component({
  selector: 'app-addphrase',
  templateUrl: './addphrase.component.html',
  styleUrls: ['./addphrase.component.css'],
  providers: [ErrorHandlerService]
})
export class AddphraseComponent implements OnInit {

  addPhraseForm: FormGroup;
  private dialogConfig;
  private errorService: ErrorHandlerService;

  constructor(public fb: FormBuilder, private phraseService: PhraseService, private dialog: MatDialog) {
    this.addPhraseForm = this.fb.group({
      _id: [''],
      character: ['', [Validators.required, Validators.maxLength(100)]],
      phrase: ['', [Validators.required, Validators.maxLength(300)]]
    })
  }

  ngOnInit() {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  submitPhraseForm() {
    console.log(this.addPhraseForm.value);
    if (this.addPhraseForm.valid) {
      console.log("Valid Phrase data");
      const enteredPhraseData = this.addPhraseForm.value;
      this.phraseService.addPhrase(enteredPhraseData)
        .subscribe(
          res => {
            console.log("Added Phrase successfully");
            let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

            //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
            dialogRef.afterClosed()
              .subscribe(result => {
                //this.addPhraseForm.reset();
                const temp: any = window;
                temp.location.assign('/phrase');
              });
          },
          (error => {
            this.errorService.dialogConfig = this.dialogConfig ;
            this.errorService.handleError(error);
          })
        );
    }
  }

  cancelPhraseForm() {
    const temp: any = window;
    temp.location.assign('/phrase');
  }
}
