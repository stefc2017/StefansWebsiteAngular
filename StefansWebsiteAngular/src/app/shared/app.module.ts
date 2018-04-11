import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../business/app.component';
import { NavbarComponent } from '../business/navbar.component';
import { WelcomeComponent } from '../business/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, WelcomeComponent]
})
export class AppModule { }
