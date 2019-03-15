import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-app',
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

     
  <button type="button" class="btn btn-primary" (click)="addtask(task.value,priority.value,parent.value,startdate.value,enddate.value,Flag)"  >Add Task</button>
  <button type="button" class="btn btn-primary" onClick="window.location.reload();" >Reset</button>

<hr>

 </div>
  `,
})
export class AddComponent implements OnInit  { 
    Tasks:Array<Object>=[];
    @Input('task') task:string=' ';
    @Input('priority') priority:string=' ';
    @Input('parent') parent:string=' ';
    @Input('startdate') startdate:string=' ';
    @Input('enddate') enddate:string=' ';
    Flag:Boolean=false;
Message=' ';

    addtask(task:string,
        priority:string,parent:string,startdate:string,enddate:string,Flag:Boolean){
        
        this.http.post('http://localhost:5001/tasks',
        {task:task,priority:priority,parent_task:parent,
            start_date:startdate,end_date:enddate,Flag:Flag})
        .toPromise()
        .then(res=>{
            console.log(res)
            return res
            
     })
    }

    constructor(public http:HttpClient)
    {
  
    }
ngOnInit()
        {
       
          }


}