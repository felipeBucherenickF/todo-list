export class Note {
  constructor(content, isChecked) {
    this.content = content;
    this.isChecked = isChecked;
  }
  checkNote() {
    this.isChecked = true;
  }
}
export class Todo {
  constructor(title, description, dueDate, priority, isChecked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
    this.notes = [];
  }
  addNote(newNote) {
    this.notes.push(newNote);
  }
  checkTodo() {
    this.isChecked = true;
  }
  unCheckTodo() {
    this.isChecked = false;
  }
}

export class Project extends Todo {
  constructor() {
    super();
    this.projectTodos = [];
  }
  addTodo(newTodo) {
    this.projectTodos.push(newTodo);
  }
}
