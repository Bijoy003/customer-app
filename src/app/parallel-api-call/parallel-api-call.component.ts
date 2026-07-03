import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parallel-api-call',
  templateUrl: './parallel-api-call.component.html',
  styleUrls: ['./parallel-api-call.component.scss']
})
export class ParallelApiCallComponent {

  userData: any;
  postData: any;
  todoData: any;

  constructor(private http: HttpClient) {}

  getData() {
    forkJoin({
      users: this.http.get('https://jsonplaceholder.typicode.com/users'),
      posts: this.http.get('https://jsonplaceholder.typicode.com/posts'),
      todos: this.http.get('https://jsonplaceholder.typicode.com/todos')
    }).subscribe({
      next: (data: any) => {
        this.userData = data.users;
        this.postData = data.posts;
        this.todoData = data.todos;

        console.log('All Data', data);
      },
      error: (err) => {
        console.error('Error in API call', err);
      }
    });
  }
}
