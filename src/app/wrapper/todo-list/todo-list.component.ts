import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    @Output()instanceEventEmmiter = new EventEmitter<{id: number, title: string; isCompleted: boolean }[]>()

    @Input() tasks: {id: number, title: string; isCompleted: boolean }[] = []


  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task)=> task.id != id )
    this.instanceEventEmmiter.emit(this.tasks)
  }

  completeTask(id: number){
    this.tasks = this.tasks.map((task)=> {
      if (task.id == id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

  }
}
