import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputabilitiesComponent } from './inputabilities.component';

describe('InputabilitiesComponent', () => {
  let component: InputabilitiesComponent;
  let fixture: ComponentFixture<InputabilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputabilitiesComponent]
    });
    fixture = TestBed.createComponent(InputabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
