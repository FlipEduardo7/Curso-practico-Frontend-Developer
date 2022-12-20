const email = document.querySelector(".navbar-email");
const menuDesk = document.querySelector(".desktop-menu");

email.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuDesk.classList.toggle("inactive");
}