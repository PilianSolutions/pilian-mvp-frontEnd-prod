import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelComponent } from './painel/painel.component';
import { PainelRoutingModule } from './painel-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    PainelRoutingModule,
    ToastModule,
    AvatarModule,
  ],exports:[PainelComponent]
})
export class PainelModule { }
