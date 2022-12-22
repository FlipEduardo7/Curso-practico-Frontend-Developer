const email = document.querySelector(".navbar-email");
const menuDesk = document.querySelector(".desktop-menu");
const btnMenu = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

email.addEventListener("click", toggleMenu);
btnMenu.addEventListener("click", toggleMenuMobile);

function toggleMenu() {
    menuDesk.classList.toggle("inactive");
}

function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");
}