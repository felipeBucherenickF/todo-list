import { todoDetailDisplay } from "./todo-detail-display";
import { todoDetail } from "..";

const storagedTodoList = JSON.parse(localStorage.getItem("TODOS")) || [];

let todo = {};

export const selectTodo = (todoTitle) => {
  todo = storagedTodoList.find((todo) => todo.title === todoTitle);

  const selectedTodoDetail = todoDetailDisplay(todo);
  todoDetail.textContent = "";
  todoDetail.append(selectedTodoDetail);
};
