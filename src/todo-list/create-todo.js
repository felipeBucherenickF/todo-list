import { Todo } from "../index";
const todoList = JSON.parse(localStorage.getItem("TODOS"));
export const createTodo = (
  todoTitle,
  todoDescription,
  todoDueDate,
  todoPriority
) => {
  const newTodo = new Todo(
    todoTitle,
    todoDescription,
    todoDueDate,
    todoPriority
  );
  todoList.push(newTodo);
  localStorage.setItem("TODOS", JSON.stringify(todoList));
};
