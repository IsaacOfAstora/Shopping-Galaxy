let leftClick = document.querySelector(".icon-leftGalaxyShip");
let rightClick = document.querySelector(".icon-rightGalaxyShip");
let mainSlider = document.querySelector(".isaac-slider");
let slider = document.querySelector(".slider-images");
let sliderImage = document.querySelectorAll(".slider-images img");
let trigger = document.querySelector(".trigger");

let counter = 1;
let size = sliderImage[0].clientWidth;
slider.style.transform = "translateX(" + -size * counter + "px)";

for (let i = 0; i < sliderImage.length - 2; i++) {
  let dot = document.createElement("span");
  trigger.appendChild(dot);
}
let triggerDot = document.querySelectorAll(".trigger span");

rightClick.addEventListener("click", moveRight);
function moveRight() {
  if (counter >= sliderImage.length - 1) return;
  slider.style.transition = "0.8s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";

  triggerRight();
  transitioned();
}
leftClick.addEventListener("click", moveLeft);
function moveLeft() {
  if (counter <= 0) return;
  slider.style.transition = "0.8s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  triggerLeft();
  transitioned();
}
/**********____________________________________**********/
/**********_____________autoDot______________************/
/**********____________________________________**********/
let x = 0;
triggerDot[x].classList.add("colored");
function triggerRight() {
  triggerDot[x].style.transition = "0.5s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
  triggerDot[x].classList.remove("colored");

  x++;
  if (x > 5) {
    x = 0;
  }
  triggerDot[x].classList.add("colored");
}

function triggerLeft() {
  triggerDot[x].style.transition = "0.5s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
  triggerDot[x].classList.remove("colored");
  x--;
  if (x < 0) {
    x = 5;
  }
  triggerDot[x].classList.add("colored");
}
/**********____________________________________**********/
/********_____________autoDot End______________**********/
/**********____________________________________**********/
/**********____________________________________**********/
/**********______________dotClick______________**********/
/**********____________________________________**********/

for (let i = 0; i < triggerDot.length; i++) {
  triggerDot[i].onclick = () => {
    triggerDot[i].style.transition = "0.5s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
    triggerDot[x].classList.remove("colored");
    triggerDot[i].classList.add("colored");
    slider.style.transition = "0.8s cubic-bezier(0.9,-0.04, 0.71, 1.05)";
    slider.style.transform = "translateX(" + -size * (i + 1) + "px)";
    x = i;
    counter = i + 1;
  };
}
/**********____________________________________**********/
/********______________dotClick End______________********/
/**********____________________________________**********/

function transitioned() {
  slider.addEventListener("transitionend", () => {
    if (sliderImage[counter].id === "lastClone") {
      slider.style.transition = "none";
      counter = sliderImage.length - 2;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (sliderImage[counter].id === "firstClone") {
      slider.style.transition = "none";
      counter = sliderImage.length - counter;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }
  });
}

/**********____________________________________**********/
/**********______________Autoplay______________**********/
/**********____________________________________**********/
function autoplay() {
  move = setInterval(moveRight, 2000);
}
autoplay();
/**********____________________________________**********/
/**********____________Autoplay End____________**********/
/**********____________________________________**********/

/**********____________________________________**********/
/**********_____________playstate______________**********/
/**********____________________________________**********/
mainSlider.addEventListener("mouseover", () => {
  clearInterval(move);
});
mainSlider.addEventListener("mouseout", autoplay);
/**********____________________________________**********/
/**********___________playstate End____________**********/
/**********____________________________________**********/
