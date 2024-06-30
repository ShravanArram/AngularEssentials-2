import { Injectable } from "@angular/core";
import { NewTask } from "./task/task.model";

@Injectable({
    providedIn:'root'
})

export class TasksService{

constructor()
{
  const tasks = localStorage.getItem('tasks');

  if(tasks)
    {
    this.tasks = JSON.parse(tasks);
    }
}

  private tasks = [
    {
    id:'t1',
    userId:'u1',
    tile:'Prepare Issue Template for user1',
    summary:'Prepare and Describe Issue',
    dueDate:'2024-06-15'
    },
    {
      id:'t6',
      userId:'u6',
      tile:'Prepare Issue Template for user6',
      summary:'Prepare and Describe Issue',
      dueDate:'2024-06-15'
      },
      {
        id:'t2',
        userId:'u2',
        tile:'Prepare Issue Template for user2',
        summary:'Prepare and Describe Issue',
        dueDate:'2024-06-15'
        },
        {
          id:'t3',
          userId:'u3',
          tile:'Prepare Issue Template for user3',
          summary:'Prepare and Describe Issue',
          dueDate:'2024-06-15'
          },
          {
            id:'t4',
            userId:'u4',
            tile:'Prepare Issue Template user4',
            summary:'Prepare and Describe Issue',
            dueDate:'2024-06-15'
            },
            {
              id:'t5',
              userId:'u5',
              tile:'Prepare Issue Template user5',
              summary:'Prepare and Describe Issue',
              dueDate:'2024-06-15'
              },
  ];


  getUserTasks(userId :string)
  {

    return this.tasks.filter(x=>x.userId===userId);
  
  }

  // addTask()
  // {
  //   console.log('hi');
  // }

  addTask(taskData:NewTask,userId:string | undefined)
  {
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        summary: taskData.summary,
        dueDate: taskData.dueDate,
        tile: taskData.tile,
        userId: userId!
      })

    this.saveTasks();

  }

  removeTask(id:string)
  {
    this.tasks = this.tasks.filter(x =>x.id!==id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

}