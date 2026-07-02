import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  template: `<p>Child Component - {{ user.name }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOnPushComponent {
  @Input() user!: { name: string };

  ngDoCheck() {
    console.log('OnPush child component checked');
  }
}
