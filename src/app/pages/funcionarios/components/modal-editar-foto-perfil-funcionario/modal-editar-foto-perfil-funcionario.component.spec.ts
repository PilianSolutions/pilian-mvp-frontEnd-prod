import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarFotoPerfilFuncionarioComponent } from './modal-editar-foto-perfil-funcionario.component';

describe('ModalEditarFotoPerfilFuncionarioComponent', () => {
  let component: ModalEditarFotoPerfilFuncionarioComponent;
  let fixture: ComponentFixture<ModalEditarFotoPerfilFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarFotoPerfilFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ModalEditarFotoPerfilFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
