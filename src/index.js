import "./styles.css";
import { todoDetailDisplay } from "./todo-detail/todo-detail-display";
import { todoListDisplay } from "./todo-list/todo-list-display";
import { menuDisplay } from "./todo-menu/todo-menu-display";

const mainContent = document.getElementById("content");
mainContent.classList.add("main-content");

const menu = menuDisplay();

const todoList = todoListDisplay();

export const todoDetail = todoDetailDisplay();

mainContent.append(menu, todoList, todoDetail);
