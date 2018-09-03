export class Task {
  title: string;
  description: string;
  executor: string;
  priority = 1;

  constructor(title: string, description: string, executor: string, priority: number) {
    this.title = title;
    this.description = description;
    this.executor = executor;
    this.priority = priority;
  }
}
