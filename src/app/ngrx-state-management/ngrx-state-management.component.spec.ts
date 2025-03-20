import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStateManagementComponent } from './ngrx-state-management.component';

describe('NgrxStateManagementComponent', () => {
  let component: NgrxStateManagementComponent;
  let fixture: ComponentFixture<NgrxStateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxStateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxStateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
