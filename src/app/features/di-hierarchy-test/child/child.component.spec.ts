import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDiTestComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildDiTestComponent;
  let fixture: ComponentFixture<ChildDiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildDiTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
