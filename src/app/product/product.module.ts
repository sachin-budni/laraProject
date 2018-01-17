import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [

  {path: 'create', component: CreateComponent},
  {path: 'list',component: ListComponent},
  {path: 'details/:id',component: DetailsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductComponent, ListComponent, DetailsComponent, CreateComponent]
})
export class ProductModule {
  
 }
