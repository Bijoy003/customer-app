import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  constructor(private cd: ChangeDetectorRef) {}

  counter = 0;
  user = { name: 'John' };

  increment() {
    this.counter++;
  }

  // updateUser() {
  //   this.user = { name: 'Alice' }; // This changes the reference
    //debugger
  //   this.user.name = 'Alice'
  //   this.cd.detectChanges();
  //   this.cd.markForCheck();
  // }

  // updateUser() {
  //   //this.user = { name: 'Alice' }; // This changes the reference
  //   //debugger
  //   //setTimeout(() => {
  //     this.cd.detectChanges();
  //     console.log(this.user);
  //     this.user.name = 'Alice';
  //     this.cd.detectChanges();
  //     //this.cd.markForCheck();
  //   //}, 10);
  // }

  updateUser() {
    this.user.name = 'Alice';
    //this.cd.markForCheck();
    //this.cd.detectChanges();
  }
}
