import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { EsqueceuSenhaComponent } from '../esqueceu-senha/esqueceu-senha.component';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.scss'],
  providers: [MessageService, DialogService]
})
export class AcessarContaComponent {
  formLogin: FormGroup;
  usuarioSenha: any = {};
  dadosUsuarios:any;
  ref: DynamicDialogRef | undefined;

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private readonly authService: AuthService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private dialogService: DialogService
  ) {
    this.formLogin = this.formBuilder.group({
      matricula: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.mecanicaBotao()
    this.listarUsuario()
  }

  listarUsuario(){
    this.loginService.listarUsuario().subscribe((response)=>{
      console.log(response)
      this.dadosUsuarios = response;
    })
  }

  mecanicaBotao() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    if (sign_in_btn && sign_up_btn && container) { // Check if elements exist
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    } else {
      console.error("One or more elements not found."); // Log an error if any element is not found
    }
  }

  validarSeExisteUsuario(){
    if(this.usuario && this.senha){
      return this.dadosUsuarios.find(
        (objeto:any) =>
        (objeto.matricula === this.usuario) &&
        (objeto.password === this.senha)
      );
    }
  }
  salvarDadoUsuarioMemoria(){
    const daddosUsuarios: any = this.dadosUsuarios.filter((entidade: any) => entidade.matricula === this.usuario)
    this.localStorageService.setItem('usuarioData', daddosUsuarios[0].matricula);
  }

  loginConta(){
    if(this.validarSeExisteUsuario()){

      this.messageService.add({severity:'success', summary:`Bem Vindo ${this.usuario}!`, detail:'Parabéns! Suas credenciais foram verificadas com sucesso. Você agora está logado em sua conta.'});
      this.salvarDadoUsuarioMemoria()
      setTimeout(() => {
        this.authService.salvarDadoUsuarioIndexedDB(this.dadosUsuarios);
       //this.authService.login(this.usuario, this.senha)
        this.router.navigate([`/${this.usuario}/painel/dashboard`])
        this.messageService.clear();
      }, 1000);

    }else if((!this.usuario && !this.senha) || (this.usuario && !this.senha) || (!this.usuario && this.senha)){
      this.messageService.add({severity:'info', summary:`Atenção`, sticky: false ,detail:'Para acessar sua conta, por favor, preencha os campos de usuário e senha.'});
    } else{
      this.messageService.add({severity:'error', summary:`Desculpe`, sticky: false ,detail:'Usuário ou senha inválidos. Tente novamente.'});
    }

  }

  get usuario(){
    const matriculaControl = this.formLogin.get('matricula');
    if (matriculaControl && matriculaControl.value !== null) {
      return matriculaControl.value;
    } else {
      return '';
    }
  }

  get senha(){
    const senhaControl = this.formLogin.get('password');
    if (senhaControl && senhaControl.value !== null) {
      return senhaControl.value;
    } else {
      return '';
    }
  }

  esqueceuSenha(){
    this.ref = this.dialogService.open(EsqueceuSenhaComponent, {
      header: 'Recupere sua senha',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false
    });

    this.ref.onClose.subscribe((esqueceuSenha: any) => {
        if (esqueceuSenha) {
            this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: 'teste' });
        }
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
  }

}
