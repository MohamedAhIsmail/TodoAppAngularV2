import { Component } from '@angular/core';
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { AppComponent } from "../app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: 'app-wrapper',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  tasks: {id: number, title: string; isCompleted: boolean }[] = [];
  emmitTask(tasks: {id: number, title: string; isCompleted: boolean }[]) {
    this.tasks = tasks
  }

}
