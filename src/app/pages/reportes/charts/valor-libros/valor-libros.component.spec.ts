import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorLibrosComponent } from './valor-libros.component';

describe('ValorLibrosComponent', () => {
  let component: ValorLibrosComponent;
  let fixture: ComponentFixture<ValorLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorLibrosComponent]
    });
    fixture = TestBed.createComponent(ValorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
