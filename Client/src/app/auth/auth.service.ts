import { Injectable } from '@angular/core';
import { LayoutService } from '../shared-module/services/layout.service';
import { Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Login } from './models/login';
import 'rxjs';

@Injectable()
export class AuthService {

  constructor(private layoutService: LayoutService, private http: Http) { }

  private apiUrl = "http://localhost:5000";
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private isUserLoggedIn = false;
  private token: string;
  private role: string;

  setToken(token, role) {
    this.isUserLoggedIn = true;
    this.token = token;
    this.role = role;
    this.layoutService.showSideBar();
  }

  login(login, password): Promise<any> {
    let credentials = {
      email: login,
      password: password
    };
    let url: string = `${this.apiUrl}/account/login`;

    return this.http.post(url, credentials, { headers: this.headers }).toPromise();
  }

  logout() {
    this.isUserLoggedIn = false;
    this.layoutService.hideSideBar();
  }

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  isAdminRole() {
    return this.role === "admin";
  }


}
