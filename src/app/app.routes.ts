import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CvMainComponent } from './cv-main/cv-main.component';
import { ProjetoComponent } from './cv-main/projeto/projeto.component';
import { ProjetoFipeComponent } from './cv-main/projeto/projeto-fipe.component';
import { NotFoundComponent } from './not-found/not-found.component';




const ROUTES: Routes = [
    {path: '', component: CvMainComponent},
    {path: 'portifolio/bikemobi', component: ProjetoComponent},
    {path: 'portifolio/fipe', component: ProjetoFipeComponent},
    {path: '**', component: NotFoundComponent}
];

export { ROUTES };
