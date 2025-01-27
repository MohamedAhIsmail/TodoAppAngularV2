import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  taskTitle: string = '';
  @Output()instanceEventEmmiter = new EventEmitter<{id: number, title: string; isCompleted: boolean }[]>()
  @Input() tasks: {id: number, title: string; isCompleted: boolean }[] = []

  addTask(taskTitle: string) {
    let taskId = this.tasks.length == 0 ? 1: this.tasks[this.tasks.length - 1].id + 1

    let task = {
      id: taskId,
      title: this.taskTitle,
      isCompleted: false
    }

    this.tasks.push(task)

    console.log(this.tasks);
    this.taskTitle = '';
    this.instanceEventEmmiter.emit(this.tasks)
  }
}
