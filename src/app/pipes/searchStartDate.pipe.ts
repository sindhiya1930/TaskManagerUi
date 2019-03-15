import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../Tasks';

@Pipe({
    name: 'searchStartDate'
})
export class SearchStartDatePipe implements PipeTransform {

    transform(tasks: Array<Tasks>, Start_Date?: string) {
        console.log(tasks);
        console.log(Start_Date);
        if(Start_Date)
        {
            let filteredCourse: Array<Tasks> = null;
            filteredCourse= tasks.filter(task => task.Start_Date.startsWith(Start_Date) )
            return filteredCourse;
        }
        return tasks;
    }

}