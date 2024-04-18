import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischiutenteComponent } from './dischiutente.component';

describe('DischiutenteComponent', () => {
  let component: DischiutenteComponent;
  let fixture: ComponentFixture<DischiutenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DischiutenteComponent]
    });
    fixture = TestBed.createComponent(DischiutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
