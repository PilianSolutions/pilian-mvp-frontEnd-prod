import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
  providers: [MessageService]
})
export class Login2Component implements OnInit  {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService){
    this.formLogin = this.formBuilder.group({
      matricula: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {

  }
  toggleForm = () => {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.toggle('active');
    } else {
      console.error("Element with class 'container' not found");
    }
  };

  loginConta(){
      this.messageService.add({ severity: 'info', summary: 'Atenção', detail: 'Não conseguimos localizar o nosso servidor!' });
      console.log(this.formLogin)
  }
}
