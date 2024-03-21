import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    TesteComponent
  ],
  exports:[TesteComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
