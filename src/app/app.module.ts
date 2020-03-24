import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ClientsComponent } from './components/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {

  }
 }
