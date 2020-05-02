import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PhraseDataElement} from "../PhraseDataElement";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor(private http:HttpClient) { }

  public getAllPhrases(){
    return this.http.get("http://localhost:8083/api/v1/phrases/allPhrases");
  }

  public deletePhrase($key:String){
    console.log("`delete URL : "+"http://localhost:8083/api/v1/phrases/deletePhrase/"+$key);
    return this.http.delete("http://localhost:8083/api/v1/phrases/deletePhrase/"+$key).subscribe();
  }

  public getPhraseRecordById($key:String){
    console.log("`get URL : "+"http://localhost:8083/api/v1/phrases/specificPhrase/"+$key);
    return this.http.delete("http://localhost:8083/api/v1/phrases/specificPhrase/"+$key);
  }


  public addPhrase(phraseData:PhraseDataElement) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:8083/api/v1/phrases/addPhrase", phraseData,options);
  }

}
