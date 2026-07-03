import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnPushComponent } from './child-onpush.component';

describe('ChildOnPushComponent', () => {
  let component: ChildOnPushComponent;
  let fixture: ComponentFixture<ChildOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildOnPushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnPushComponent);
    component = fixture.componentInstance;
    component.user = { name: 'Test User' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
