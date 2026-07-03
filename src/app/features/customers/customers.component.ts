import { Component } from '@angular/core';
import { CounterSubjectService } from '../../core/Services/counter-subject.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  count = 0;

  constructor(private stateService: CounterSubjectService) {
    this.stateService.count$.subscribe(value => this.count = value);
  }

  increment() {
    this.stateService.increment();
  }

  decrement() {
    this.stateService.decrement();
  }

  reset() {
    this.stateService.reset();
  }
}
