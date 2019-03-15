import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchPriorityFrom'
})
export class SearchPriorityFromPipe implements PipeTransform {

    transform(tasks: Array<Tasks>, Priority_From?: string) {
       // console.log(Priority_To);
        console.log(Priority_From);
        var s=parseInt(Priority_From)
        if(Priority_From)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => (parseInt(task.Priority)>=(parseInt(Priority_From))))
            return filteredCourse;
        }
        return tasks;
    }

}