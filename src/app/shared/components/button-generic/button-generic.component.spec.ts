import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGenericComponent } from './button-generic.component';

describe('ButtonGenericComponent', () => {
  let component: ButtonGenericComponent;
  let fixture: ComponentFixture<ButtonGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGenericComponent]
    });
    fixture = TestBed.createComponent(ButtonGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
