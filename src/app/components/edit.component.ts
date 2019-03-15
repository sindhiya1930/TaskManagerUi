import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-edit',
  template: `
  <div class="container">
  <div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Task</span>
      </div>
      <input type="text" #task (change)="0" class="form-control" placeholder="Task" aria-label="task" aria-describedby="basic-addon1">
  </div>
  </div>

  <div class="row">
      <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Priority</span>
          </div>
          <input type="range" (input)="priority.value" min="0" max="30" step="1" #priority id="priority" (change)="0" class="form-control"  aria-label="priority" aria-describedby="basic-addon1"><br/>
          <label for="priority">{{ priority.value }}</label>
          
      </div>
  </div>

  <div class="row">
      <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Parent Task</span>
          </div>
          <input type="text" #parent (change)="0" class="form-control" placeholder="Parent Task" aria-label="parent" aria-describedby="basic-addon1">

      </div>
  </div>

  <div class="row">
      <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Start Date</span>
          </div>
          <input type="date" #startdate (change)="0" class="form-control" placeholder="Start Date" aria-label="startdate" aria-describedby="basic-addon1">
      </div>
  </div>

    <div class="row">
      <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">End Date</span>
          </div>
          <input type="date" #enddate (change)="0" class="form-control" placeholder="End Date" aria-label="email" aria-describedby="basic-addon1">
      </div>
  </div>

     
  <button type="button" class="btn btn-primary"  (click)="update(task_id,task.value,priority.value,parent.value,startdate.value,enddate.value)" >Update</button>
  <button type="button" class="btn btn-primary"  onClick="window.location.reload();" >Cancel</button>

<hr>

 </div>
  `,
})
export class EditComponent implements OnInit  { 
    task_id:string;
    @Input('task') task:string=' ';
    @Input('priority') priority:string=' ';
    @Input('parent') parent:string=' ';
    @Input('startdate') startdate:string=' ';
    @Input('enddate') enddate:string=' ';
    Tasks:Array <Object>=[];
    constructor(public http:HttpClient,private route: ActivatedRoute,
        private router: Router){
            this.task_id= route.snapshot.params['id'];

    }
ngOnInit()
        {

          }
          

    update(task_id:string,task:string,priority:string,parent:string,startdate:string,enddate:string)
    {

        console.log(priority)
        this.http.put('http://localhost:5001/edittasks/'+task_id,
        {task:task,priority:priority,parent_task:parent,
        start_date:startdate,end_date:enddate})
        .toPromise()
        .then(res=>{
        console.log(res);
        
        
        })
      }
    }
