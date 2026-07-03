import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RxjsReactiveProgrammingComponent } from './rxjs-reactive-programming.component';

describe('RxjsReactiveProgrammingComponent', () => {
  let component: RxjsReactiveProgrammingComponent;
  let fixture: ComponentFixture<RxjsReactiveProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RxjsReactiveProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsReactiveProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
