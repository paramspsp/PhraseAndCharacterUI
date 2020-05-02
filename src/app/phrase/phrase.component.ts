import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {PhraseService} from "../phrase.service";
import {PhraseDataElement} from "../../PhraseDataElement";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {EditphraseComponent} from "../editphrase/editphrase.component";
import {CharacterDataElement} from "../../CharacterDataElement";

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {

  ELEMENT_DATA : PhraseDataElement[];
  private idColumn = '_id';
  displayedColumns: string[] = ['id', 'character', 'phrase','actions'];
  dataSource = new MatTableDataSource<PhraseDataElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(EditphraseComponent)
  public editphraseComponent =  EditphraseComponent;
  constructor(private phraseService:PhraseService,private changeDetectorRefs: ChangeDetectorRef,public dialog: MatDialog) { }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.dialog = this.dialog;
    this.getAllPhraseElements();
  }

  public getAllPhraseElements(){
    let resp = this.phraseService.getAllPhrases();
    //console.log("getAllPhraseElements called");
    resp.subscribe(phrase => this.dataSource.data=phrase as PhraseDataElement[]);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete($key){
      console.log("$key  -> "+$key);
      this.phraseService.deletePhrase($key);
      this.deleteRowDataTable ($key, this.idColumn, this.paginator, this.dataSource);
    }

    //Deleting manually from the data table after deleted from database
  private deleteRowDataTable (recordId, idColumn, paginator, dataSource) {
    this.ELEMENT_DATA = dataSource.data;
    const itemIndex = this.ELEMENT_DATA.findIndex(obj => obj[idColumn] === recordId);
    dataSource.data.splice(itemIndex, 1);
    dataSource.paginator = paginator;
  }

  onEdit(recordId) {
    console.log("onEdit started"+recordId);
   /* this.dialog.open(this.editphraseComponent,
      { data: { recordId: recordId, idColumn: this.idColumn, paginator: this.paginator, dataSource: this.dataSource}});*/
    console.log("onEdit Ended");
  }
}

