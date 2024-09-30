import "../styles.css";

export const showTodoListDisplay = () => {
  const todoListDisplayContent = document.createElement("h2");
  todoListDisplayContent.textContent = "Todo List Display CTM";

  const todoListDisplay = document.createElement("div");
  todoListDisplay.append(todoListDisplayContent);
  todoListDisplay.classList.add("section");

  return todoListDisplay;
};
