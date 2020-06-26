import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from "../../config/global";

@Injectable({
  providedIn: 'root'
})
export class EmailSupplierService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public url: string
  constructor(
    private httpClient: HttpClient
  ) { 
    this.url = GLOBAL.url
  }


  sendEmail(userform,):Observable<any>{
    // const params = JSON.stringify(userUpdate)
    const headers = new HttpHeaders({ 'Content-Type':  'application/json'})
         return this.httpClient.post( this.url + '/email/',  userform, {headers:headers})
   }
 






}
