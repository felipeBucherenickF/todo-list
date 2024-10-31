const todoList = JSON.parse(localStorage.getItem("TODOS"));

export const checkTodo = (todoTitle) => {
  const foundTodo = todoList.find((todo) => todo.title === todoTitle);
  if (foundTodo.isChecked === false) {
    foundTodo.isChecked = true;
  } else {
    foundTodo.isChecked = false;
  }

  localStorage.setItem("TODOS", JSON.stringify(todoList));
  return foundTodo.isChecked;
};
