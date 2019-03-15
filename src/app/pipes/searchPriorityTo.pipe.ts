import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchPriorityTo'
})
export class SearchPriorityToPipe implements PipeTransform {

    transform(tasks: Array<Tasks>, Priority_To?: string) {
       // console.log(Priority_To);
        console.log(Priority_To);
        var s=parseInt(Priority_To)
        if(Priority_To)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => (parseInt(task.Priority)<=(parseInt(Priority_To))))
            return filteredCourse;
        }
        return tasks;
    }

}