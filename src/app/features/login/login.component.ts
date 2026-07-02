import { Component } from '@angular/core';
import { Router, RouterPreloader } from '@angular/router';
import { AuthService } from '../../core/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router, private preloader: RouterPreloader) {console.log('Login module loaded');}

  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}