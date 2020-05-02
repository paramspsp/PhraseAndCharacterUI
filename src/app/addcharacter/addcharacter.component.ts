import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ErrorHandlerService} from "../error-handler.service";
import {PhraseService} from "../phrase.service";
import {MatDialog} from "@angular/material/dialog";
import {SuccessDialogComponent} from "../shared/dialogs/success-dialog/success-dialog.component";
import {CharacterService} from "../character.service";
import {noUndefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css'],
  providers: [ErrorHandlerService]
})
export class AddcharacterComponent implements OnInit {


  addCharacterForm: FormGroup;
  private dialogConfig;


  constructor(public fb: FormBuilder, private characterService: CharacterService, private dialog: MatDialog,private errorService: ErrorHandlerService) {
    this.addCharacterForm = this.fb.group({
      _id: [''],
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      picture: ['', [Validators.required, Validators.maxLength(200)]],
      age: [0, [Validators.required ]]
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

  submitCharacterForm() {
    console.log(this.addCharacterForm.value);
    if (this.addCharacterForm.valid) {
      console.log("Valid Phrase data");
      const enteredCharacterData = this.addCharacterForm.value;
      this.characterService.addCharacter(enteredCharacterData)
        .subscribe(
          res => {
            console.log("Added Character successfully");
            let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

            //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
            dialogRef.afterClosed()
              .subscribe(result => {
                const temp: any = window;
                temp.location.assign('/character');
              });
          },
          (error => {
            //console.log("Error Status" + error.status);
            this.errorService.dialogConfig = { ...this.dialogConfig };
            this.errorService.handleError(error);
          })
        );
    }
  }
  cancelCharacterForm() {
    const temp: any = window;
    temp.location.assign('/character');
  }

}
