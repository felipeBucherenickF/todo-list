import "../styles.css";
import { createTodo } from "./create-todo";

export const addTodoModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("add-todo-modal");

  const addTodoForm = document.createElement("form");

  const addTodoInputs = document.createElement("div");
  addTodoInputs.classList.add("add-todo-form-inputs");

  const todoTitleContainer = document.createElement("div");
  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.textContent = "Title";
  const todoTitleInput = document.createElement("input");

  todoTitleContainer.append(todoTitleLabel, todoTitleInput);
  todoTitleContainer.classList.add("todo-input-container");

  const todoDescriptionContainer = document.createElement("div");
  const todoDescriptionLabel = document.createElement("label");
  todoDescriptionLabel.textContent = "Description";
  const todoDescriptionInput = document.createElement("input");

  todoDescriptionContainer.append(todoDescriptionLabel, todoDescriptionInput);
  todoDescriptionContainer.classList.add("todo-input-container");

  const todoDueDateContainer = document.createElement("div");
  const todoDueDateLabel = document.createElement("label");
  todoDueDateLabel.textContent = "DueDate";
  const todoDueDateInput = document.createElement("input");

  todoDueDateContainer.append(todoDueDateLabel, todoDueDateInput);
  todoDueDateContainer.classList.add("todo-input-container");

  const todoPriorityContainer = document.createElement("div");
  const todoPriorityLabel = document.createElement("label");
  todoPriorityLabel.textContent = "Priority";
  const todoPrioritySelect = document.createElement("select");
  const todoPriorityOptionLow = document.createElement("option");
  todoPriorityOptionLow.textContent = "Low";
  const todoPriorityOptionMedium = document.createElement("option");
  todoPriorityOptionMedium.textContent = "Medium";
  const todoPriorityOptionHigh = document.createElement("option");
  todoPriorityOptionHigh.textContent = "High";
  todoPrioritySelect.append(
    todoPriorityOptionLow,
    todoPriorityOptionMedium,
    todoPriorityOptionHigh
  );

  todoPriorityContainer.append(todoPriorityLabel, todoPrioritySelect);
  todoPriorityContainer.classList.add("todo-input-container");

  addTodoInputs.append(
    todoTitleContainer,
    todoDescriptionContainer,
    todoDueDateContainer,
    todoPriorityContainer
  );

  const addTodoButtons = document.createElement("div");
  addTodoButtons.classList.add("add-todo-form-buttons");

  const addTodoButtonDone = document.createElement("button");
  addTodoButtonDone.textContent = "Add Todo";
  addTodoButtonDone.classList.add("add-todo-button-done");
  addTodoButtonDone.addEventListener("click", () => {
    createTodo(
      todoTitleInput.value,
      todoDescriptionInput.value,
      todoDueDateInput.value,
      todoPrioritySelect.value
    );
  });

  const addTodoButtonCancel = document.createElement("button");
  addTodoButtonCancel.textContent = "Cancel";
  addTodoButtonCancel.classList.add("add-todo-button-cancel");
  addTodoButtonCancel.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  addTodoButtons.append(addTodoButtonDone, addTodoButtonCancel);

  addTodoForm.append(addTodoInputs, addTodoButtons);

  modal.append(addTodoForm);

  return modal;
};
