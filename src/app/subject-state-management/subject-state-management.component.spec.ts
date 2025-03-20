import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStateManagementComponent } from './subject-state-management.component';

describe('SubjectStateManagementComponent', () => {
  let component: SubjectStateManagementComponent;
  let fixture: ComponentFixture<SubjectStateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectStateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectStateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
