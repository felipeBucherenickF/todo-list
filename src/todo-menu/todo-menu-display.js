export const menuDisplay = () => {
  const menuContent = document.createElement("h2");
  menuContent.textContent = "Menu";

  const menu = document.createElement("div");
  menu.append(menuContent);
  menu.classList.add("section");

  return menu;
};
