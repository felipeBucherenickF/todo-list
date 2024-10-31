import { addTodoModal } from "../add-todo/add-todo-modal";
import { selectTodo } from "../todo-detail/select-todo";
import { checkTodo } from "./check-todo";
import "../styles.css";

const storagedTodoList = JSON.parse(localStorage.getItem("TODOS")) || [];

export const todoListDisplay = () => {
  const todos = document.createElement("ul");
  storagedTodoList.forEach((todo) => {
    const todoDisplay = document.createElement("div");
    todoDisplay.classList.add("todo-display");

    const todoCheckButton = document.createElement("button");
    todoCheckButton.addEventListener("click", () => {
      const isChecked = checkTodo(todo.title);
      if (isChecked) {
        todoDisplay.classList.add("checked");
        todoCheckButton.classList.add("button-checked");
      } else {
        todoDisplay.classList.remove("checked");
        todoCheckButton.classList.remove("button-checked");
      }
    });

    const todoTitle = document.createElement("p");
    todoTitle.textContent = todo.title;

    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;

    const todoPriority = document.createElement("p");
    todoPriority.textContent = todo.priority;

    todoDisplay.append(todoCheckButton, todoTitle, todoDueDate, todoPriority);

    todoDisplay.addEventListener("click", () => {
      selectTodo(todo.title);
    });
    todos.append(todoDisplay);
  });

  const openAddTodoModal = document.createElement("button");
  openAddTodoModal.textContent = "+";
  openAddTodoModal.classList.add("open-add-todo-modal");
  const openAddTodoModalLabel = document.createElement("span");
  openAddTodoModalLabel.textContent = "Add Todo";
  openAddTodoModal.append(openAddTodoModalLabel);

  openAddTodoModal.addEventListener("click", () => {
    const modal = addTodoModal();
    document.body.appendChild(modal);
  });

  const todoList = document.createElement("div");
  todoList.append(todos, openAddTodoModal);
  todoList.classList.add("section");
  todoList.classList.add("todo-list-display");

  return todoList;
};
