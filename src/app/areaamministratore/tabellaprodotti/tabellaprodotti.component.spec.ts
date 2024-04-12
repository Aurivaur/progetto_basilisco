import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaprodottiComponent } from './tabellaprodotti.component';

describe('TabellaprodottiComponent', () => {
  let component: TabellaprodottiComponent;
  let fixture: ComponentFixture<TabellaprodottiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabellaprodottiComponent]
    });
    fixture = TestBed.createComponent(TabellaprodottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
