import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegformComponent } from './regform.component';

describe('RegformComponent', () => {
  let component: RegformComponent;
  let fixture: ComponentFixture<RegformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegformComponent]
    });
    fixture = TestBed.createComponent(RegformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
