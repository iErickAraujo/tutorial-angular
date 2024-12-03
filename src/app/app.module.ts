import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaginainicialComponent } from './components/paginainicial/paginainicial.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginainicialComponent,
    Pagina2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
