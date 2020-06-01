import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import testJsonFile from '../../../save/datatest.json';


@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  ngOnInit(): void 
  {
    this.getUser();
  }
  constructor( private http: HttpClient ) 
  {
  }

  baseUrl = 'http://localhost/api';
  listuser: User[];

  error = '';
  success = '';

//=======================================//

  getAllUser(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.listuser = res['data'];
        return this.listuser;
    }),
    catchError(this.handleError));
  }

  getUser(): void {
    this.getAllUser().subscribe(
      (res: User[]) => { this.listuser = res; },
      (err) => { this.listuser = err; }
    );
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

export class User {
  constructor(
    id:  number,
    name: string,
    mdp: string) {}
}

