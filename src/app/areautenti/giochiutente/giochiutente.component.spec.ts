import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiochiutenteComponent } from './giochiutente.component';

describe('GiochiutenteComponent', () => {
  let component: GiochiutenteComponent;
  let fixture: ComponentFixture<GiochiutenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiochiutenteComponent]
    });
    fixture = TestBed.createComponent(GiochiutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
