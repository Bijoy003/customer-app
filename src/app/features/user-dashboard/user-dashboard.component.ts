import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/Services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  get role(): string {
    return this.auth.getRole();
  }

  goBack() {
    this.router.navigate(['/feature-test']);
  }
}
