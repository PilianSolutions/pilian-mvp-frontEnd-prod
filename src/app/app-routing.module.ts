import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';






const routes: Routes = [


  { path: '',
  loadChildren: () => import('../app/core/login/login.module').then(m => m.LoginModule),
  canActivate: [] },

  { path: 'login',
  loadChildren: () => import('../app/core/login2/login2.module').then(m => m.Login2Module),
  canActivate: [] },

  { path: 'painel',
  loadChildren: () => import('../app/core/painel/painel.module').then(m => m.PainelModule),
  canActivate: [] },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
