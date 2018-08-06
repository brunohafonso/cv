import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CvMainComponent } from './cv-main/cv-main.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjetoComponent } from './cv-main/projeto/projeto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjetoFipeComponent } from './cv-main/projeto/projeto-fipe.component';




@NgModule({
  declarations: [
    AppComponent,
    CvMainComponent,
    ProjetoComponent,
    NotFoundComponent,
    ProjetoFipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
