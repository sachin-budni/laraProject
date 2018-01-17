import * as path from 'path';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AboutusComponent } from './aboutus.component';

const routes:Routes=[
  {
    path:"",component: AboutusComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutusComponent],
  
})
export class AboutusModule { }
