import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentDiTestComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentDiTestComponent;
  let fixture: ComponentFixture<ParentDiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDiTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});