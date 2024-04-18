import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibriutenteComponent } from './libriutente.component';

describe('LibriutenteComponent', () => {
  let component: LibriutenteComponent;
  let fixture: ComponentFixture<LibriutenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibriutenteComponent]
    });
    fixture = TestBed.createComponent(LibriutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
