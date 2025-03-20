import { Component } from '@angular/core';
import { AppCounterState } from './counter.state';
import { selectCount } from './counter.selector';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-state-management',
  templateUrl: './ngrx-state-management.component.html',
  styleUrl: './ngrx-state-management.component.scss'
})
export class NgrxStateManagementComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppCounterState>) {
    this.count$ = store.select(selectCount);
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
