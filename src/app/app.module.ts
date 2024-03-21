import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from './app.config';
import { initializer } from './util/api-init';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { LoginModule } from './core/login/login.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { Login2Module } from './core/login2/login2.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    LoginModule,
    Login2Module,
  ],
  providers: [
    DynamicDialogRef,
    DynamicDialogConfig,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [AppConfig] },],
  bootstrap: [AppComponent]
})
export class AppModule { }
