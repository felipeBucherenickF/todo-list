import { addTodoModal } from "../add-todo/add-todo-modal";
import { cachedTodo } from "../todo-detail/todo-detail";
import "../styles.css";

const todoList = JSON.parse(localStorage.getItem("TODOS")) || [];

const showTodos = () => {
  const todos = document.createElement("ul");
  todoList.forEach((todo) => {
    const todoDisplay = document.createElement("div");
    todoDisplay.classList.add("todo-display");

    const todoTitleDisplay = document.createElement("p");
    todoTitleDisplay.textContent = todo.title;

    const todoDueDateDisplay = document.createElement("p");
    todoDueDateDisplay.textContent = todo.dueDate;

    const todoPriorityDisplay = document.createElement("p");
    todoPriorityDisplay.textContent = todo.priority;

    todoDisplay.append(
      todoTitleDisplay,
      todoDueDateDisplay,
      todoPriorityDisplay
    );
    todoDisplay.addEventListener("click", () => {
      cachedTodo(todo.title);
    });
    todos.append(todoDisplay);
  });
  return todos;
};

const todos = showTodos();

export const showTodoListDisplay = () => {
  const todoListDisplayTitle = document.createElement("h2");
  todoListDisplayTitle.textContent = "Todo List";

  const todoListDisplayOpenAddTodoModalButton =
    document.createElement("button");
  todoListDisplayOpenAddTodoModalButton.textContent = "+";
  todoListDisplayOpenAddTodoModalButton.classList.add(
    "open-add-todo-modal-button"
  );
  todoListDisplayOpenAddTodoModalButton.addEventListener("click", () => {
    const modal = addTodoModal();
    document.body.appendChild(modal);
  });

  const todoListDisplay = document.createElement("div");
  todoListDisplay.append(
    todoListDisplayTitle,
    todos,
    todoListDisplayOpenAddTodoModalButton
  );
  todoListDisplay.classList.add("section");

  return todoListDisplay;
};
