import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })
export class MyServeceService {
  baseUrl = 'http://localhost:8080/restapi-jersey';

  constructor(private http: HttpClient) {
   }
  getUsers(): Observable<User[]>{
    const response = this.http.get<User[]>(this.baseUrl + '/api/user/index');
    return response;
  }
}
