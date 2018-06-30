import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CvMainComponent } from './cv-main/cv-main.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    CvMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
