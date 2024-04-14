import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarFuncionarioComponent } from './modal-adicionar-funcionario.component';

describe('ModalAdicionarFuncionarioComponent', () => {
  let component: ModalAdicionarFuncionarioComponent;
  let fixture: ComponentFixture<ModalAdicionarFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
