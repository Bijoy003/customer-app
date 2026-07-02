import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsReactiveProgrammingComponent } from './rxjs-reactive-programming.component';

describe('RxjsReactiveProgrammingComponent', () => {
  let component: RxjsReactiveProgrammingComponent;
  let fixture: ComponentFixture<RxjsReactiveProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
