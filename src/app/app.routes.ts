import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CvMainComponent } from './cv-main/cv-main.component';
import { ProjetoComponent } from './cv-main/projeto/projeto.component';




const ROUTES: Routes = [
    {path: '', component: CvMainComponent},
    {path: 'projetos/:id', component: ProjetoComponent}
];

export { ROUTES };
