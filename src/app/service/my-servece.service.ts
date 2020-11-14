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
    return this.http.get<User[]>(this.baseUrl + '/api/user/index');
  }

  saveUser(entity): Observable<User>{
    const res = this.http.post<User>(this.baseUrl + '/api/user/save', entity);
    return res;
  }

  
}
