import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchParent'
})
export class SearchParentPipe implements PipeTransform {

    transform(tasks: Array<Tasks>, Parent?: string) {
        console.log(tasks);
        console.log(Parent);
        if(Parent)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => task.Parent_Task.startsWith(Parent) )
            return filteredCourse;
        }
        return tasks;
    }

}