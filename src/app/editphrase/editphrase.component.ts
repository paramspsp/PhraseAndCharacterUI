import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from "../notification.service";
import {PhraseService} from "../phrase.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-editphrase',
  templateUrl: './editphrase.component.html',
  styleUrls: ['./editphrase.component.css']
})
export class EditphraseComponent implements AfterViewInit {

  private recordId: string;
  private idColumn;
  private paginator;
  private dataSource;
  private phraseService:PhraseService;

  phraseEditForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    character: new FormControl('', Validators.required),
    phrase: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<EditphraseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("edit phrase called");
  }

  ngAfterViewInit() {
  }

  public fetchRecord() {
    this.recordId=this.data.recordId;
    this.idColumn = this.data.idColumn;
    this.paginator = this.data.paginator;
    this.dataSource = this.data.dataSource;

    // Display the data retrieved from the data model to the form model.
    this.phraseService.getPhraseRecordById(this.idColumn)
      .subscribe(data => {
          this.fillForm(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.message);
          //this.handleError(err);
        });
  }

  // Populate the form, called above in fetchRecord().

  private fillForm(parsedData) {
    this.phraseEditForm.setValue({
      _id: parsedData.id,
      character: parsedData.character,
      phrase: parsedData.phrase,
    });
    //this.existingUserName(); // If existing name, don't validate.
  }




  ngOnInit() {
    this.phraseService.getAllPhrases();
  }

  onClear() {
    this.phraseEditForm.reset();
    this.onClose();
  }

  onSubmit() {
    console.log("onSubmit");
    if (this.phraseEditForm.valid) {
      if (!this.phraseEditForm.get('$key').value) {
        //this.service.insertEmployee(this.service.form.value)
      } else {
        //this.service.updateEmployee(this.service.form.value);
        this.phraseEditForm.reset();
        this.initializeFormGroup();
        //this.notificationService.success(':: Submitted successfully');
        this.onClose();
      }
    }
  }



  initializeFormGroup() {
    this.phraseEditForm.setValue({
      _id: null,
      character: '',
      phrase: '',
    });
  }

  onClose() {
    this.phraseEditForm.reset();
    this.initializeFormGroup();
  }

}
