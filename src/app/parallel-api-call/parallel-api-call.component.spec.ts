import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelApiCallComponent } from './parallel-api-call.component';

describe('ParallelApiCallComponent', () => {
  let component: ParallelApiCallComponent;
  let fixture: ComponentFixture<ParallelApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParallelApiCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
