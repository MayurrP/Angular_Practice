import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';

  tasks : string[] = ['Buy Groceries','Finish Project','Go to the GYM'];
  newTask="";
  constructor()
{}

editTask(task:string)
{
  const updatedTask = prompt('Edit Task : ',task);
  if(updatedTask)
  {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = updatedTask;
  }
}

deleteTask(task:string)
{
  const index = this.tasks.indexOf(task);
  if(index !== -1)
  {
    this.tasks.splice(index,1);
  }
}

addTask()
{
  if(this.newTask.trim())
  {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
}

}

