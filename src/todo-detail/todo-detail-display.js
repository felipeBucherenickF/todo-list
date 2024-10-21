import "../styles.css";

export const todoDetailDisplay = (todo) => {
  const todoDetail = document.createElement("div");
  todoDetail.classList.add("todo-detail");

  if (!todo) {
    const message = document.createElement("p");
    message.textContent = "Not selected Todo";
    todoDetail.append(message);
  } else {
    const todoTitle = document.createElement("div");
    const todoTitleLabel = document.createElement("span");
    todoTitleLabel.textContent = "Title";
    const todoTitleValue = document.createElement("p");
    todoTitleValue.textContent = todo.title;
    todoTitle.append(todoTitleLabel, todoTitleValue);

    const todoDescription = document.createElement("div");
    const todoDescriptionLabel = document.createElement("span");
    todoDescriptionLabel.textContent = "Description";
    const todoDescriptionValue = document.createElement("p");
    todoDescriptionValue.textContent = todo.description;
    todoDescription.append(todoDescriptionLabel, todoDescriptionValue);

    const todoDueDate = document.createElement("div");
    const todoDueDateLabel = document.createElement("span");
    todoDueDateLabel.textContent = "DueDate";
    const todoDueDateValue = document.createElement("p");
    todoDueDateValue.textContent = todo.dueDate;
    todoDueDate.append(todoDueDateLabel, todoDueDateValue);

    const todoPriority = document.createElement("div");
    const todoPriorityLabel = document.createElement("span");
    todoPriorityLabel.textContent = "Priority";
    const todoPriorityValue = document.createElement("p");
    todoPriorityValue.textContent = todo.priority;
    todoPriority.append(todoPriorityLabel, todoPriorityValue);

    todoDetail.append(todoTitle, todoDescription, todoDueDate, todoPriority);
  }
  todoDetail.classList.add("section");
  return todoDetail;
};
