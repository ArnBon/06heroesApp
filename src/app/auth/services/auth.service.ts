import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from "../interfaces/user.interface";

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser():User | undefined{
    if(!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email:string, password: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      tap(user => localStorage.setItem('token', 'aASDgjhasda.asdasd.aadsf123k'))
    );
  }



}