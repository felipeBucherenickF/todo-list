import { Todo, todoList } from "../index";

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
};
