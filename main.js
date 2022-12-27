/* MENU DESKTOP */
const email = document.querySelector(".navbar-email");
const menuDesk = document.querySelector(".desktop-menu");
/*MENU MOBILE */
const btnMenu = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
/*PRODUCT DETAIL */
const shopCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");
const openProductDetailCart = document.querySelector(".product-detail-cart");
const closeProductDetailCart = document.querySelector(".product-detail-close");

email.addEventListener("click", toggleDeskMenu);
btnMenu.addEventListener("click", toggleMenuMobile);
shopCart.addEventListener("click", toggleProductDetail);
closeProductDetailCart.addEventListener("click", closeProductDetail);

/**
 * If the product detail is not closed, then close it. Then toggle the menu.
 */
function toggleDeskMenu() {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  openProductDetailCart.classList.add("inactive");
  menuDesk.classList.toggle("inactive");
}

/**
 * If the product detail is not closed, then close it. Then toggle the menu mobile.
 */
function toggleMenuMobile() {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  openProductDetailCart.classList.add("inactive");
  menuMobile.classList.toggle("inactive");
}

/**
 * If the mobile menu is open, close it. Then, toggle the product detail.
 */
function toggleProductDetail() {
  const isMobileMenuClosed = menuMobile.classList.contains("inactive");
  const isDeskMenu = menuDesk.classList.contains("inactive");

  if (!isMobileMenuClosed || !isDeskMenu) {
    //si el menu mobile esta cerrado
    menuMobile.classList.add("inactive"); //add sirve para añadir una clase
    menuDesk.classList.add("inactive");
  }
  openProductDetailCart.classList.add("inactive");
  productDetail.classList.toggle("inactive"); //toggle sirve para intercambiar la clase
}

function openProductDetail(){
    openProductDetailCart.classList.remove("inactive");
    menuDesk.classList.add("inactive");
    menuMobile.classList.add("inactive");
    productDetail.classList.add("inactive");
}
function closeProductDetail(){
    openProductDetailCart.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 4120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Teclado",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.addEventListener("click", openProductDetail);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./iconos/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img, productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(productList);