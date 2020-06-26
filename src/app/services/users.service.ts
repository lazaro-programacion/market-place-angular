import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Users } from '../models/users';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL } from '../../config/global';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // TODO: No debería ser necerario
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public url: string;
  public identity: any;
  public token: string;

  constructor(private httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(userRegister): Observable<any> {
    const params = JSON.stringify(userRegister);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.url + '/user/register', params, {
      headers,
    });
  }

  signUp(userLogin, gettoken = null): Observable<any> {
    if (gettoken != null) {
      userLogin.gettoken = gettoken;
    }

    // const params = JSON.stringify(userLogin)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.url + '/user/login', userLogin, {
      headers: headers,
    });
  }

  getIdentity = () => {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  };

  getToken = () => {
    const token = localStorage.getItem('token');
    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  };

  getUsers = () => {
    return this.httpClient.get<Users[]>('http://localhost:4000/api/user');
  };

  getUser = (_id: string): Observable<Users> => {
    return this.httpClient.get<Users>(`http://localhost:4000/api/user/` + _id);
  };

  saveUsers = (users: Users): Observable<Users> => {
    console.log('saving patient', Users);
    return this.httpClient
      .post<Users>('http://localhost:4000/api/user/', users, this.httpOptions)
      .pipe(catchError(this.handleError));
  };

  getEmail = (email: string): Observable<Users> => {
    return this.httpClient.get<Users>(
      `http://localhost:4000/api/user/email/` + email
    );
  };

  putUsers(userUpdate, _id: string): Observable<any> {
    // const params = JSON.stringify(userUpdate)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken(),
    });
    return this.httpClient.put(
      this.url + '/user/update-user/' + _id,
      userUpdate,
      { headers }
    );
  }
  putAdminUsers(userUpdate, _id: string): Observable<any> {
    // const params = JSON.stringify(userUpdate)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken(),
    });
    return this.httpClient.put(
      this.url + '/user/update/' + _id,
      userUpdate,
      { headers }
    );
  }

  putPassword = (user: Users, _id: string): Observable<any> => {
    console.log(user);

    return this.httpClient
      .put(this.url + '/user/' + _id, user)
      .pipe(catchError(this.handleError));
  };

  searchUsers = (search: string) => {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken(),
    });
    return this.httpClient
      .get<Users[]>('http://localhost:4000/api/user/search/' + search, {
        headers: headers,
      })
      .toPromise();
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
