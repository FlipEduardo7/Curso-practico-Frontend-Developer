/* MENU DESKTOP */
const email = document.querySelector(".navbar-email");
const menuDesk = document.querySelector(".desktop-menu");
/*MENU MOBILE */
const btnMenu = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
/*PRODUCT DETAIL */
const shopCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

email.addEventListener("click", toggleDeskMenu);
btnMenu.addEventListener("click", toggleMenuMobile);
shopCart.addEventListener("click", toggleProductDetail);

function toggleDeskMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetail.classList.add("inactive");
    }
    
    menuDesk.classList.toggle("inactive");
}

function toggleMenuMobile() {

    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetail.classList.add("inactive");
    }

    menuMobile.classList.toggle("inactive");
}

function toggleProductDetail() {

    const isMobileMenuClosed = menuMobile.classList.contains("inactive");
    const isDeskMenu = menuDesk.classList.contains("inactive");

    if(!isMobileMenuClosed || !isDeskMenu){ //si el menu mobile esta cerrado
        menuMobile.classList.add("inactive");//add sirve para añadir una clase
        menuDesk.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");//toggle sirve para intercambiar la clase 
}