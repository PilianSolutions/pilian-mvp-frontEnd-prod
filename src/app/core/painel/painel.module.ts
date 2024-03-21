import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { PainelRoutingModule } from './painel-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    PainelRoutingModule,
    ToastModule
  ],exports:[PainelComponent]
})
export class PainelModule { }
