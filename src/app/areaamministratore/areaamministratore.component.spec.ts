import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaamministratoreComponent } from './areaamministratore.component';

describe('AreaamministratoreComponent', () => {
  let component: AreaamministratoreComponent;
  let fixture: ComponentFixture<AreaamministratoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaamministratoreComponent]
    });
    fixture = TestBed.createComponent(AreaamministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
