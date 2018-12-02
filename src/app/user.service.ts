import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of  } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object[]> {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<object[]>(url);
  }
}
