import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Task} from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output()
  create: EventEmitter<Task> = new EventEmitter<Task>();

  taskForm: FormGroup;

  executors: string[] = ['Петров А.', 'Павлов М.'];

  constructor() {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      taskDescription: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      executorName: new FormControl(this.executors[0])
    });
  }

  ngOnInit() {
  }

  createTask() {
    if (this.taskForm.invalid) {
      return;
    }
    const value = this.taskForm.value;
    const task = new Task(value.taskName, value.taskDescription, value.executorName, 1);
    this.create.emit(task);
    this.taskForm.reset({
      taskName: '',
      taskDescription: '',
      executorName: this.executors[1]
    });
  }

}
