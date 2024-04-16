import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel/painel.component';

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
