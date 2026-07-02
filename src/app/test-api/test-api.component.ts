import { Component } from '@angular/core';
import { TestApiService } from '../core/Services/test-api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.scss'
})
export class TestApiComponent {

  constructor(private api: TestApiService) {}

  testRetry() {
    this.api.getFailingData().subscribe({
      next: res => console.log('success', res),
      error: err => console.log('final error', err)
    });
  }
}
