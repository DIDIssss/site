const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-aberto");
});
