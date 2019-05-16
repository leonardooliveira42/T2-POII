import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFunctionsComponent } from './input-functions.component';

describe('InputFunctionsComponent', () => {
  let component: InputFunctionsComponent;
  let fixture: ComponentFixture<InputFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
