import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  usuarioSenha: any = {};
  dadosUsuarios:any;

  constructor(
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private readonly authService: AuthService,
    private messageService: MessageService,
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
    console.log(this.senha)
    return this.dadosUsuarios.find(
      (objeto:any) =>
      (objeto.matricula === this.usuario) &&
      (objeto.password === this.senha)
      );
  }
  salvarDadoUsuarioMemoria(){
    const daddosUsuarios: any = this.dadosUsuarios.filter((entidade: any) => entidade.matricula === this.usuario)
    localStorage.setItem('usuario', daddosUsuarios[0].matricula);
  }

  loginConta(){
    console.log(this.validarSeExisteUsuario())
    if(this.validarSeExisteUsuario()){

      this.messageService.add({severity:'success', summary:`Bem Vindo ${this.usuario}!`, detail:'Parabéns! Suas credenciais foram verificadas com sucesso. Você agora está logado em sua conta.'});
      //this.salvarDadoUsuarioMemoria()
      setTimeout(() => {

        this.authService.salvarDadoUsuarioIndexedDB(this.dadosUsuarios);
       //this.authService.login(this.usuario, this.senha)
        this.router.navigate(['/painel'])
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

}
