import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorAlquilerLibrosComponent } from './valor-alquiler-libros.component';

describe('ValorAlquilerLibrosComponent', () => {
  let component: ValorAlquilerLibrosComponent;
  let fixture: ComponentFixture<ValorAlquilerLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorAlquilerLibrosComponent]
    });
    fixture = TestBed.createComponent(ValorAlquilerLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
