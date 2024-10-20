import "./styles.css";
import { showTodoDetail } from "./todo-detail/todo-detail";
import { showTodoListDisplay } from "./todo-list/todo-list-display";

class Note {
  constructor(content, isChecked) {
    this.content = content;
    this.isChecked = isChecked;
  }
  checkNote() {
    this.isChecked = true;
  }
}
export class Todo {
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

const mainContent = document.getElementById("content");
mainContent.classList.add("main-content");

const menuContent = document.createElement("h2");
menuContent.textContent = "Menu";

const menu = document.createElement("div");
menu.append(menuContent);
menu.classList.add("section");

const todoListDisplay = showTodoListDisplay();

export const todoDetail = showTodoDetail();
todoDetail.classList.add("section");

mainContent.append(menu, todoListDisplay, todoDetail);
