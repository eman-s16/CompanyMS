import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwDevelopmentComponent } from './sw-development.component';

describe('SwDevelopmentComponent', () => {
  let component: SwDevelopmentComponent;
  let fixture: ComponentFixture<SwDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwDevelopmentComponent]
    });
    fixture = TestBed.createComponent(SwDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
