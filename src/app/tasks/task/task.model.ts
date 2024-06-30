export interface Task{
    id:string,
    userId:string,
    tile: string,
    summary:string,
    dueDate:string
  }

  export interface NewTask {

    tile: string,
    summary:string,
    dueDate:string
    

  }