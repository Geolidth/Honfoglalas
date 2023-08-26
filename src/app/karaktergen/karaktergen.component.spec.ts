import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaraktergenComponent } from './karaktergen.component';

describe('KaraktergenComponent', () => {
  let component: KaraktergenComponent;
  let fixture: ComponentFixture<KaraktergenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaraktergenComponent]
    });
    fixture = TestBed.createComponent(KaraktergenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
