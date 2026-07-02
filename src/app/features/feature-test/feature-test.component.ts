import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-test',
  templateUrl: './feature-test.component.html'
})
export class FeatureTestComponent {

  constructor(private router: Router) {}

  enableBeta() {
    localStorage.setItem('beta', 'true');
    alert('Beta enabled. Reload app to apply routes.');
  }

  disableBeta() {
    localStorage.removeItem('beta');
    alert('Beta disabled. Reload app to apply routes.');
  }

  goToBeta() {
    this.router.navigate(['/beta']);
  }
}