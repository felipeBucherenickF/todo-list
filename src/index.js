const todoList = [];

class Note {
  constructor(content, isChecked) {
    this.content = content;
    this.isChecked = isChecked;
  }
  checkNote() {
    this.isChecked = true;
  }
}
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = [];
  }
  addNote(newNote) {
    this.notes.push(newNote);
  }
}

class Project extends Todo {
  constructor() {
    super();
    this.projectTodos = [];
  }
  addTodo(newTodo) {
    this.projectTodos.push(newTodo);
  }
}
