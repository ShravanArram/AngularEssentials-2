import { Component,EventEmitter,Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

// interface Task{
//   id:string,
//   userId:string,
//   tile: string,
//   summary:string,
//   dueDate:string
// }

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [NewTaskComponent, CardComponent,DatePipe]
})
export class TaskComponent {

  constructor(private taskService: TasksService)
  {
     
  }

  @Input({required:true}) task! :Task;
  @Output()complete = new EventEmitter<string>();

  onComplete(){
    this.taskService.removeTask(this.task.id);
    //this.complete.emit(this.task.id);

  }

}
