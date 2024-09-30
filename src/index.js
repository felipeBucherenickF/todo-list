import "./styles.css";
import { showTodoListDisplay } from "./todo-list/todo-list-display";

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

const menuContent = document.createElement("h2");
menuContent.textContent = "Menu";

const todoDetailContent = document.createElement("h2");
todoDetailContent.textContent = "Todo Detail";

const mainContent = document.getElementById("content");
mainContent.classList.add("main-content");

const menu = document.createElement("div");
menu.append(menuContent);
menu.classList.add("section");

const todoListDisplay = showTodoListDisplay();

const todoDetail = document.createElement("div");
todoDetail.append(todoDetailContent);
todoDetail.classList.add("section");

mainContent.append(menu, todoListDisplay, todoDetail);
