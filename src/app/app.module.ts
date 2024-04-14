import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgForOf, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { LoginModule } from './core/login/login.module';
import { Login2Module } from './core/login2/login2.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { initializer } from './util/api-init';

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
  exports: [NgForOf, NgIf],
  providers: [
    DynamicDialogRef,
    DynamicDialogConfig,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [AppConfig] },],
  bootstrap: [AppComponent]
})
export class AppModule { }
