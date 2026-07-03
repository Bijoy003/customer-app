import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/Services/auth.service';

@Component({
  selector: 'app-feature-test',
  templateUrl: './feature-test.component.html'
})
export class FeatureTestComponent {

  constructor(private auth: AuthService, private router: Router) {}

  get role(): string {
    return this.auth.getRole();
  }

  toggleRole() {
    const nextRole = this.role === 'admin' ? 'user' : 'admin';
    this.auth.setRole(nextRole);
  }

  goToDashboard() {
    const target = this.role === 'admin' ? '/admindashboard' : '/userdashboard';
    this.router.navigate([target]);
  }
}
