import { Component, EventEmitter, Inject, Output,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  // providers:[TasksService]
})
export class NewTaskComponent {

  @Input({required:true}) userId!:string|undefined;
  @Output() close = new EventEmitter<void>();
 // @Output() add= new EventEmitter<NewTask>();
  enteredTitle='';
  enteredSummary='';
  enteredDate ='';

  // private taskService = Inject(TasksService);
  constructor(private taskService: TasksService) { }


  onCancel()
  {
  this.close.emit();
  }

  onSubmit()
  {
    //this.taskService.addTask();

    this.taskService.addTask({
      tile:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate
    },this.userId);

    this.close.emit();

    }
    // this.add.emit({
    //   tile :this.enteredTitle,
    //   summary : this.enteredSummary,
    //   dueDate:this.enteredDate
    // });
  }


