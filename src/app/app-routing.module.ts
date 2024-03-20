import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = [


  { path: '',
  loadChildren: () => import('../app/core/login/login.module').then(m => m.LoginModule),
  canActivate: [] },
  { path: 'painel',
  loadChildren: () => import('../app/core/painel/painel.module').then(m => m.PainelModule),
  canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
