import { addTodoModal } from "../add-todo/add-todo-modal";
import "../styles.css";

const todoList = JSON.parse(localStorage.getItem("TODOS"));

const showTodos = () => {
  const todos = document.createElement("ul");
  todoList.forEach((todo) => {
    const todoDisplay = document.createElement("div");

    const todoTitleDisplay = document.createElement("p");
    todoTitleDisplay.textContent = todo.title;

    const todoDescriptionDisplay = document.createElement("p");
    todoDescriptionDisplay.textContent = todo.description;

    const todoDueDateDisplay = document.createElement("p");
    todoDueDateDisplay.textContent = todo.dueDate;

    const todoPriorityDisplay = document.createElement("p");
    todoPriorityDisplay.textContent = todo.priority;

    todoDisplay.append(
      todoTitleDisplay,
      todoDescriptionDisplay,
      todoDueDateDisplay,
      todoPriorityDisplay
    );
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
