import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Tasks } from '../Tasks';
@Component({
  selector: 'my-app',
  template: `  <div class="container">
  <div class="row">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Task</span>
        </div>
        <input type="text" #search1 (keyup)="0" class="form-control" placeholder="Task" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </div>
  <div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Parent</span>
      </div>
      <input type="text" #search2 (keyup)="0" class="form-control" placeholder="Parent" aria-label="Username" aria-describedby="basic-addon1">
  </div>
</div>
<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Start Date</span>
    </div>
    <input type="text" #search3 (keyup)="0" class="form-control" placeholder="Start_Date" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>

<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">End Date</span>
    </div>
    <input type="text" #search4 (keyup)="0" class="form-control" placeholder="End_Date" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>
<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Priority From</span>
    </div>
    <input type="text" #search5 (keyup)="0" class="form-control" placeholder="Priority From" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>
<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Priority To</span>
    </div>
    <input type="text" #search6 (keyup)="0" class="form-control" placeholder="Priority To" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>

  <div class="row">
    
      <div class="row">
      
          <table class="table " >
          <thead>
          <tr >
              <th scope="col">Task</th>
              <th scope="col">Parent</th>
              <th scope="col">Priority</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">     </th>
              <th scope="col">     </th>
    
    
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let Task of Tasks|searchTask:search1.value|searchParent:search2.value|searchStartDate:search3.value|searchEndDate:search4.value|searchPriorityFrom:search5.value|searchPriorityTo:search6.value" >
      
          <td>{{Task.Task}}</td>
          <td>{{Task.Parent_Task}}</td>
          <td>{{Task.Priority}}</td>
          <td>{{Task.Start_Date}}</td>
          <td>{{Task.End_Date}}{{Flag}}</td>
          <th scope="col">   </th>
          <td><button type="button" class="btn btn-success" [disabled]="Task.Flag" (click)="edit(Task._id)">Edit</button></td>
          <td><button type="button" class="btn btn-success" [disabled]="Task.Flag" (click)="end(Task._id,Task.Task,Task.Priority,Task.Parent_Task,Task.Start_Date,Task.End_Date)">End Task</button></td>
          </tr>
          </tbody>
          </table>
      </div>
  </div>
</div>
  `,
})
export class ViewComponent implements OnInit {

 
    Tasks:Array <Object>=[];
message=" ";

  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
      
  
  }
  

  ngOnInit(){
    
      this.http.get('http://ec2-3-17-70-247.us-east-2.compute.amazonaws.com:5001/task')
      .toPromise()
      .then(res=>{
      console.log(res);
      
      this.Tasks=res as any;
      })
    }

    edit(Task_ID:string){
        
                this.http.get('http://ec2-3-17-70-247.us-east-2.compute.amazonaws.com:5001/task/'+Task_ID)
                .toPromise()
                .then(res=>{
                console.log(res[0].Flag);
        
               if(res[0].Flag==false)
                {
                    this.router.navigate(['Edit/'+Task_ID]);
            }
            else 
            {
                    this.message="uneditable"
            }
                
                
                })
              }
        end(Task_ID:string,task:string,priority:string,parent:string,startdate:string,enddate:string){
            
                this.http.put('http://ec2-3-17-70-247.us-east-2.compute.amazonaws.com:5001/endtask/'+Task_ID,
                {task:task,priority:priority,parent_task:parent,
                    start_date:startdate,end_date:enddate})
                .toPromise()
                .then(res=>{
                console.log(res);
                
                
                })
              }
 }