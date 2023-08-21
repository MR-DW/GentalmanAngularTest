import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PeopleTableComponent } from 'src/app/components';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // Como es un standalone se importa
    PeopleTableComponent,
  ]
})
export class HomeModule { }
