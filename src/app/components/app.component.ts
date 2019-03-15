import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Task Manager</h1>
  <div><a [routerLink]="['/Add']">Add Task</a></div><div><a [routerLink]="['/View']">View Task</a></div>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { }
