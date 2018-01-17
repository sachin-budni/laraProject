import { Location } from 'tslint/lib/rules/strictBooleanExpressionsRule';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule, MatButtonModule } from '@angular/material';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'Home',component : HomeComponent},
  {path: 'product',loadChildren:"app/product/product.module#ProductModule"},
  {path: 'contactus',loadChildren:"app/contactus/contactus.module#ContactusModule"},
  {path: 'aboutus',loadChildren:"app/aboutus/aboutus.module#AboutusModule"}
  
]

@NgModule({
  declarations: [
    AppComponent

  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    HomeModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
