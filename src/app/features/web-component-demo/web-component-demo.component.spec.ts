import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentDemoComponent } from './web-component-demo.component';

describe('WebComponentDemoComponent', () => {
  let component: WebComponentDemoComponent;
  let fixture: ComponentFixture<WebComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
