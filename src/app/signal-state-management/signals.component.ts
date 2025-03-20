import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  constructor(public counterService: CounterService){}
}
