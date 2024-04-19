import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoverFuncionarioComponent } from './modal-remover-funcionario.component';

describe('ModalRemoverFuncionarioComponent', () => {
  let component: ModalRemoverFuncionarioComponent;
  let fixture: ComponentFixture<ModalRemoverFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRemoverFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ModalRemoverFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
