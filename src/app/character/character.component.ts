import {Component, OnInit, ViewChild} from '@angular/core';
import {PhraseDataElement} from "../../PhraseDataElement";
import {MatTableDataSource} from "@angular/material/table";
import {PhraseService} from "../phrase.service";
import {CharacterDataElement} from "../../CharacterDataElement";
import {CharacterService} from "../character.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  private idColumn = '_id';
  ELEMENT_DATA : CharacterDataElement[];
    displayedColumns: string[] = ['id','FirstName', 'LastName','Picture','Age','actions'];
  dataSource = new MatTableDataSource<CharacterDataElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private characterService:CharacterService) { }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllCharacterElements();
  }

  public getAllCharacterElements(){
    let resp = this.characterService.getAllCharacters();
    resp.subscribe(character => this.dataSource.data=character as CharacterDataElement[]);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete($key){
    console.log("$key  -> "+$key);
    this.characterService.deleteCharacter($key);
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
