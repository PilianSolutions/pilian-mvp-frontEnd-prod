import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { TesteComponent } from 'src/app/pages/teste/teste.component';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { AuthGuardGuard } from 'src/app/shared/guards/auth-guard.guard';



const routes: Routes = [
  {
    path: '',
    component: PainelComponent,
    canActivate: [AuthGuardGuard],
    children: [
      { path: '', redirectTo: 'painel', pathMatch: 'full' }, // Redirecionamento
      {
        path: 'painel',
        loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
      },
    ],

  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
