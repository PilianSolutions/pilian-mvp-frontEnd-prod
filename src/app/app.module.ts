import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from './app.config';
import { initializer } from './util/api-init';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot([])
  ],
  providers: [
    DynamicDialogRef,
    DynamicDialogConfig,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [AppConfig] },],
  bootstrap: [AppComponent]
})
export class AppModule { }
