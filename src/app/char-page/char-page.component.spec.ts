import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharPageComponent } from './char-page.component';

describe('CharPageComponent', () => {
  let component: CharPageComponent;
  let fixture: ComponentFixture<CharPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharPageComponent]
    });
    fixture = TestBed.createComponent(CharPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
