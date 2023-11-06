import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadPagsComponent } from './cantidad-pags.component';

describe('CantidadPagsComponent', () => {
  let component: CantidadPagsComponent;
  let fixture: ComponentFixture<CantidadPagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantidadPagsComponent]
    });
    fixture = TestBed.createComponent(CantidadPagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
