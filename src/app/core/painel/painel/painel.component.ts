import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {

  constructor() { }

  ngOnInit(): void {
    this.sidebar();
  }

  sidebar() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    if (sidebar) {
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
}
