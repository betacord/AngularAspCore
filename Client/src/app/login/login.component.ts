import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Login } from '../auth/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  login = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.login, this.password)
      .then((token) => {
        this.authService.setToken(token.json().token, token.json().role);
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert('Niepoprawne login i hasło');
      });
  }
}
