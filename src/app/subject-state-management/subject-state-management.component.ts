import { Component } from '@angular/core';
import { CounterSubjectService } from '../core/Services/counter-subject.service';

@Component({
  selector: 'app-subject-state-management',
  templateUrl: './subject-state-management.component.html',
  styleUrl: './subject-state-management.component.scss'
})
export class SubjectStateManagementComponent {
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
