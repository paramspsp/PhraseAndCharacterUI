import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhraseComponent } from './phrase/phrase.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './character/character.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { EditphraseComponent } from './editphrase/editphrase.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { EditPhraseComponent } from './edit-phrase/edit-phrase.component';
import { AddphraseComponent } from './addphrase/addphrase.component';
import { AddcharacterComponent } from './addcharacter/addcharacter.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    PhraseComponent,
    CharacterComponent,
    EditphraseComponent,
    HomeComponent,
    EditCharacterComponent,
    EditPhraseComponent,
    AddphraseComponent,
    AddcharacterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    SharedModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: PhraseComponent},
      {path: 'phrase', component: PhraseComponent},
      {path: 'addphrase', component: AddphraseComponent},
      {path: 'phrase/:phraseId', component: EditphraseComponent},
      {path: 'addcharacter', component: AddcharacterComponent},
      {path: 'character:/characterId', component: EditCharacterComponent},
      {path: 'character', component: CharacterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents =[HomeComponent,PhraseComponent,CharacterComponent,EditCharacterComponent,EditPhraseComponent]
