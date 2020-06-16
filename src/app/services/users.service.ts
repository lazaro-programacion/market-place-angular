import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};
  constructor(private httpClient: HttpClient) {
  }

  getUsers = () => {
    return this.httpClient.
      get<Users[]>('http://localhost:4000/api/user');
  }

  getUser = (id: string): Observable<Users> => {
    return this.httpClient.get<Users>(
      `http://localhost:4000/api/user/${id}`
    );
  }

  // tslint:disable-next-line: variable-name
  saveUsers = (users: Users): Observable<Users> => {
    console.log('saving patient', Users);
    return this.httpClient.post<Users>(
      'http://localhost:4000/api/user/', users, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}
console.log('me traigo', Users);
