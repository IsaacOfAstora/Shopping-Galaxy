const in_Row = document.querySelector(".rowLook");
const in_Col = document.querySelector(".columnLook");
let RowContainer = document.querySelector(".products");
let RowContainerChild0 = document.getElementsByClassName("product-item");
let RowContainerChild1 = document.getElementsByClassName("product-item-image");
let RowContainerChild2 = document.getElementsByClassName("product-info");
let RowContainerChild3 = document.getElementsByClassName("buy");
console.log(RowContainerChild3);
in_Col.classList.add("inUse");

in_Row.onclick = () => {
  in_Row.classList.add("inUse");
  in_Col.classList.remove("inUse");
  RowContainer.classList.add("its-row-time");
  for (let i = 0; i < RowContainerChild3.length; i++) {
    RowContainerChild0[i].classList.add("its-row-time");
    RowContainerChild1[i].classList.add("its-row-time");
    RowContainerChild2[i].classList.add("its-row-time");
    RowContainerChild3[i].classList.add("its-row-time");
  }
};
in_Col.onclick = () => {
  in_Col.classList.add("inUse");
  in_Row.classList.remove("inUse");
  RowContainer.classList.remove("its-row-time");
  for (let i = 0; i < RowContainerChild3.length; i++) {
    RowContainerChild0[i].classList.remove("its-row-time");
    RowContainerChild1[i].classList.remove("its-row-time");
    RowContainerChild2[i].classList.remove("its-row-time");
    RowContainerChild3[i].classList.remove("its-row-time");
  }
};
