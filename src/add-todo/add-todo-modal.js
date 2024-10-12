import "../styles.css";

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
  const todoPriorityInput = document.createElement("input");
  todoPriorityContainer.append(todoPriorityLabel, todoPriorityInput);
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
