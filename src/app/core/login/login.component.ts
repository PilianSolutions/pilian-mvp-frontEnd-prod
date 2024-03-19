import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit  {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService){
    this.formLogin = this.formBuilder.group({
      matricula: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.mecanicaBotao()
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

  loginConta(){   
      this.messageService.add({ severity: 'info', summary: 'Atenção', detail: 'Não conseguimos localizar o nosso servidor!' });
      console.log(this.formLogin)
  }
}
