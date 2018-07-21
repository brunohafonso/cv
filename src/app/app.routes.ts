import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CvMainComponent } from './cv-main/cv-main.component';
import { ProjetoComponent } from './cv-main/projeto/projeto.component';
import { NotFoundComponent } from './not-found/not-found.component';




const ROUTES: Routes = [
    {path: '', component: CvMainComponent},
    {path: 'portifolio/:id', component: ProjetoComponent},
    {path: '**', component: NotFoundComponent}
];

export { ROUTES };
