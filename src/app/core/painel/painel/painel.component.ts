import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  providers: [MessageService]
})
export class PainelComponent {
  items: MenuItem[] | undefined;
  id:any = '3812938129';

  constructor(private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

    });
    this.sidebar();
  }

  sidebar() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    if (sidebar) {
      sidebar.classList.toggle("open");
      this.menuBtnChange();
      closeBtn?.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        this.menuBtnChange();
      });

      searchBtn?.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        this.menuBtnChange();
      });
    }
  }

  menuBtnChange() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    if (sidebar && closeBtn) {

      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }
  mensagem(): void{
    this.messageService.add({ severity: 'info', summary: 'Atenção', detail: 'Não conseguimos localizar o nosso servidor!' });
  }

  
}
