/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<!((------(-From Column to Row Icons pseudo classes-)------))!>
////////////////////////////////////////////////////////////////
 */
const Amoudi = document.querySelector(".columnLook");
const Mostaqim = document.querySelector(".rowLook");
/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<!((------(-From Column to Row HTML elements-)------))!>
////////////////////////////////////////////////////////////////
 */
const productList = document.querySelector(".products-list");
let productItem = document.getElementsByClassName("product-item");
let productItemState = document.getElementsByClassName("product-item-state");
let productItemImage = document.getElementsByClassName("product-item-image");
let AddToCartButton = document.getElementsByClassName("add-to-cart");
/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
<!((------(-From Column to Row Coding Start-)------))!>
////////////////////////////////////////////////////////////////
 */
Amoudi.classList.add("inUse");

Mostaqim.onclick = () => {
  Mostaqim.classList.add("inUse");
  Amoudi.classList.remove("inUse");
  productList.classList.add("mostaqim");
  for (let i = 0; i < AddToCartButton.length; i++) {
    productItem[i].classList.add("mostaqim");
    productItemState[i].classList.add("mostaqim");
    productItemImage[i].classList.add("mostaqim");
    AddToCartButton[i].classList.add("mostaqim");
  }
};
Amoudi.onclick = () => {
  Amoudi.classList.add("inUse");
  Mostaqim.classList.remove("inUse");
  productList.classList.remove("mostaqim");
  for (let i = 0; i < AddToCartButton.length; i++) {
    productItem[i].classList.remove("mostaqim");
    productItemState[i].classList.remove("mostaqim");
    productItemImage[i].classList.remove("mostaqim");
    AddToCartButton[i].classList.remove("mostaqim");
  }
};
