import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaFuncionariosComponent } from './tabela-funcionarios.component';

describe('TabelaFuncionariosComponent', () => {
  let component: TabelaFuncionariosComponent;
  let fixture: ComponentFixture<TabelaFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaFuncionariosComponent]
    });
    fixture = TestBed.createComponent(TabelaFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
