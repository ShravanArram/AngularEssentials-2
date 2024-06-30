import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers:[TasksService]
})

export class TasksComponent {

@Input({required:true}) name :string | undefined;
@Input({required:true}) userId :string | undefined;
isAddTaskSelected:boolean=false;

constructor(private tasksService:TasksService)
{

}

// tasks = [
//   {
//   id:'t1',
//   userId:'u1',
//   tile:'Prepare Issue Template for user1',
//   summary:'Prepare and Describe Issue',
//   dueDate:'2024-06-15'
//   },
//   {
//     id:'t6',
//     userId:'u6',
//     tile:'Prepare Issue Template for user6',
//     summary:'Prepare and Describe Issue',
//     dueDate:'2024-06-15'
//     },
//     {
//       id:'t2',
//       userId:'u2',
//       tile:'Prepare Issue Template for user2',
//       summary:'Prepare and Describe Issue',
//       dueDate:'2024-06-15'
//       },
//       {
//         id:'t3',
//         userId:'u3',
//         tile:'Prepare Issue Template for user3',
//         summary:'Prepare and Describe Issue',
//         dueDate:'2024-06-15'
//         },
//         {
//           id:'t4',
//           userId:'u4',
//           tile:'Prepare Issue Template user4',
//           summary:'Prepare and Describe Issue',
//           dueDate:'2024-06-15'
//           },
//           {
//             id:'t5',
//             userId:'u5',
//             tile:'Prepare Issue Template user5',
//             summary:'Prepare and Describe Issue',
//             dueDate:'2024-06-15'
//             },
// ];

get selectedUserTasks(){

  return this.tasksService.getUserTasks(this.userId!);
  //return this.tasks.filter(x=>x.userId===this.userId);

}

// onCompleteTask(id:string){

//   this.tasksService.removeTask(id);
//   //this.tasks = this.tasks.filter(x =>x.id!==id);

// }

AddTask()
{
  this.isAddTaskSelected = true;

}

onCloseTask()
{
  this.isAddTaskSelected = false;

}

// onAddTask(taskData:NewTask)
// {
//   this.tasksService.addTask(taskData,this.userId!);
//   // this.tasks.unshift({
//   //   id: new Date().getTime().toString(),
//   //   summary: taskData.summary,
//   //   dueDate: taskData.dueDate,
//   //   tile: taskData.tile,
//   //   userId: this.userId!
//   // })

//   this.isAddTaskSelected = false;
// }

}
