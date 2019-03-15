import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent }  from './components/app.component';
import {HttpClientModule } from '@angular/common/http';
import {ViewComponent} from './components/view.component';
import {AddComponent} from './components/add.component';
import {EditComponent} from './components/edit.component';
import { Tasks } from './Tasks';
import {SearchTaskPipe} from './pipes/searchTask.pipe'
import {SearchParentPipe} from './pipes/searchParent.pipe'
import {SearchStartDatePipe} from './pipes/searchStartDate.pipe'
import {SearchEndDatePipe} from './pipes/searchEndDate.pipe'
import {SearchPriorityFromPipe} from './pipes/searchPriorityFrom.pipe'
import {SearchPriorityToPipe} from './pipes/searchPriorityTo.pipe'
import { Pipe, PipeTransform } from '@angular/core';

const appRoutes:Routes =
[
  {
    path:'Add',component:AddComponent
  },
  
  {
    path:'View', component:ViewComponent
  } ,
  {
    path:'Edit/:id', component:EditComponent
  }
];

@NgModule({
  imports:      [ BrowserModule ,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,AddComponent ,ViewComponent,EditComponent,SearchTaskPipe,SearchParentPipe,SearchStartDatePipe,SearchEndDatePipe,SearchPriorityFromPipe,SearchPriorityToPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


 }
