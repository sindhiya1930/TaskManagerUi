import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

    transform(tasks: Array<Tasks>, Task?: string) {
        console.log(tasks);
        console.log(Task);
        if(Task)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => task.Task.startsWith(Task) )
            return filteredCourse;
        }
        return tasks;
    }

}