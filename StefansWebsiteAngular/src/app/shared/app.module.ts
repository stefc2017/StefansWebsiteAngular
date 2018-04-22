import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../business/components/app.component';
import { NavbarComponent } from '../business/components/navbar.component';
import { WelcomeComponent } from '../business/components/welcome.component';
import { FooterComponent } from '../business/components/footer.component';
import { EducationComponent } from '../business/components/education.component';
import { EducationService } from '../business/services/education.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    VerticalTimelineModule
  ],
  providers: [EducationService],
  bootstrap: [AppComponent, NavbarComponent, WelcomeComponent, FooterComponent, EducationComponent]
})
export class AppModule { }
