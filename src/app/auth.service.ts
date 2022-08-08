import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      this.saveCurrentUSer()
    }
  }

  saveCurrentUSer() {
    let Token: any = localStorage.getItem("userToken");
    // console.log(jwtDecode(Token));
    this.currentUser.next(jwtDecode(Token));
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.currentUser.next(null);
    this._Router.navigate(['/login']);
  }

  register(FormData: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}signup`, FormData)
  }
  login(FormData: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}signin`, FormData)
  }
}
