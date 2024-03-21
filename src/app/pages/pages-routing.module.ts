import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    component: TesteComponent,
  },
  {
    path: 'teste2',
    component: Teste2Component,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
