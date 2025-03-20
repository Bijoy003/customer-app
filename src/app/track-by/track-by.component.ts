import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrl: './track-by.component.scss'
})
export class TrackByComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 3, name: 'Item 3' },
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }

  changeList() {
    this.items = [
      { id: 1, name: 'Updated Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Updated Item 5' },
      { id: 3, name: 'Duplicate Item 3' },
      { id: 6, name: 'Item 6' },
    ];
  }
}
