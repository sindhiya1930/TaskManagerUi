import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchEndDate'
})
export class SearchEndDatePipe implements PipeTransform {

    transform(tasks: Array<Tasks>, End_Date?: string) {
        console.log(tasks);
        console.log(End_Date);
        if(End_Date)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => task.End_Date.startsWith(End_Date) )
            return filteredCourse;
        }
        return tasks;
    }

}