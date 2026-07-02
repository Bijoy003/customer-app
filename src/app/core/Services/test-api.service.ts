import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TestApiService {

  constructor(private http: HttpClient) {}

  getFailingData() {
    // Always returns 500
    return this.http.get('https://test.test/test');
    //return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
