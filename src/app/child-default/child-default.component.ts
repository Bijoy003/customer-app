import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-default',
  template: `<p>Child Component - {{ user.name }}</p>`,
})
export class ChildDefaultComponent {
  @Input() user!: { name: string };

  ngDoCheck() {
    console.log('Default child component checked');
  }
}

