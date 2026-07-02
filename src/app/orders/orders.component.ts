import { Component } from '@angular/core';
import { CounterService } from '../signal-state-management/counter.service';
import { Observable } from 'rxjs';
import { AppCounterState } from '../ngrx-state-management/counter.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../ngrx-state-management/counter.selector';
import { decrement, increment, reset } from '../ngrx-state-management/counter.actions';
import { CounterSubjectService } from '../core/Services/counter-subject.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  count$: Observable<number>;
  count = 0;
  
  constructor(public counterService: CounterService, public stateService: CounterSubjectService, private store: Store<AppCounterState>) {
    this.count$ = store.select(selectCount);
    this.stateService.count$.subscribe(value => this.count = value);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
