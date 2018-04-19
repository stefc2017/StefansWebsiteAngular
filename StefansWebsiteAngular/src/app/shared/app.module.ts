import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../business/components/app.component';
import { NavbarComponent } from '../business/components/navbar.component';
import { WelcomeComponent } from '../business/components/welcome.component';
import { FooterComponent } from '../business/components/footer.component';
import { EducationService } from '../business/services/education.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EducationService],
  bootstrap: [AppComponent, NavbarComponent, WelcomeComponent, FooterComponent]
})
export class AppModule { }
