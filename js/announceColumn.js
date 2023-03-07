let leftClick = document.querySelector(".icon-leftGalaxyShip");
let rightClick = document.querySelector(".icon-rightGalaxyShip");
let mainSlider = document.querySelector(".isaac-slider");
let slider = document.querySelector(".slider-images");
let sliderImage = document.querySelectorAll(".slider-images img");
let trigger = document.querySelector(".trigger");

let counter = 0;
let size = sliderImage[0].clientWidth;

rightClick.addEventListener("click", moveRight);

function moveRight() {
  if (counter >= sliderImage.length - 1) return;
  slider.style.transition = "0.6s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  triggerRight();
}

leftClick.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "0.6s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  triggerLeft();
});

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

for (let i = 0; i < sliderImage.length - 2; i++) {
  let dot = document.createElement("span");
  trigger.appendChild(dot);
}
let triggerDot = document.querySelectorAll(".trigger span");
/**********____________________________________**********/
/**********______________Autoplay______________**********/
/**********____________________________________**********/
function autoplay() {
  move = setInterval(timer, 2000);
  function timer() {
    moveRight();
  }
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

// function letTrigger() {
//   for (let i = 0; i < triggerDot.length; i++) {
//     triggerDot[i].classList.remove("colored");
//   }
//   triggerDot[counter].classList.add("colored");
// }
let i = 0;
triggerDot[i].classList.add("colored");
function triggerRight() {
  triggerDot[i].classList.remove("colored");
  i++;
  if (i > 3) {
    i = 0;
  }
  triggerDot[i].classList.add("colored");
}

function triggerLeft() {
  triggerDot[i].classList.remove("colored");
  i--;
  if (i < 0) {
    i = 3;
  }
  triggerDot[i].classList.add("colored");
}

/********************************************************/
/********************************************************/
/********************************************************/
/********************************************************/
/*******************______________***********************/
/********************Second Slider***********************/
/*******************______________***********************/
/********************************************************/
/********************************************************/
/********************************************************/
/********************************************************/
