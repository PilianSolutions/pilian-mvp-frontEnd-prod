import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { PainelRoutingModule } from './painel-routing.module';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    PainelRoutingModule
  ],exports:[PainelComponent]
})
export class PainelModule { }
