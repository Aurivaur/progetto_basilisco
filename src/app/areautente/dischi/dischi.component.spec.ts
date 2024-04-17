import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischiComponent } from './dischi.component';

describe('DischiComponent', () => {
  let component: DischiComponent;
  let fixture: ComponentFixture<DischiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DischiComponent]
    });
    fixture = TestBed.createComponent(DischiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
