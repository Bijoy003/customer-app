import { Component } from '@angular/core';
import { TestDiHeirarchyCounterService } from '../../../core/Services/test-di-heirarchy-counter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [TestDiHeirarchyCounterService]
})
export class ChildDiTestComponent {
  constructor(public counter: TestDiHeirarchyCounterService){}

  increment() {
    this.counter.value++;
  }
}
