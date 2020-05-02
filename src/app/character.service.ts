import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PhraseDataElement} from "../PhraseDataElement";
import {CharacterDataElement} from "../CharacterDataElement";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  public getAllCharacters(){
    return this.http.get("http://localhost:8083/api/v1/characters/allCharacters");
  }

  public addCharacter(characterData:CharacterDataElement) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:8083/api/v1/characters/addCharacter", characterData,options);
  }

  public deleteCharacter($key:String){
    console.log("`delete URL : "+"http://localhost:8083/api/v1/characters/deleteCharacter/"+$key);
    return this.http.delete("http://localhost:8083/api/v1/characters/deleteCharacter/"+$key).subscribe();
  }

}
