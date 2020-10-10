import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-link',
  templateUrl: './task-link.component.html',
  styleUrls: ['./task-link.component.css']
})
export class TaskLinkComponent implements OnInit {

  taskId = -1;
  questionId = -1;
  tasks: Array<Task>

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask(1).subscribe((t: Task) => {
      if (t) {
        this.tasks.push(t);
      }
    });
  }

  getTaskTitles() {
    return this.tasks.map(t => t.title);
  }

  getQuestionsContent() {
    return this.tasks[this.taskId].questions.map(q => q.content);
  }

  getAnswersContent() {
    return this.tasks[this.taskId].questions[this.questionId].answers.map(a => a.content);
  }

  selectTask() {

  }

  selectQuestion() {

  }
}
