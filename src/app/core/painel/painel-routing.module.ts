import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { TesteComponent } from 'src/app/pages/teste/teste.component';



const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    children: [
      { path: '', redirectTo: ':id', pathMatch: 'full' }, // Redirecionamento
      {
        path: ':id',
        loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
      },
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
