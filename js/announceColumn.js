let leftClick = document.querySelector(".icon-leftGalaxyShip");
let rightClick = document.querySelector(".icon-rightGalaxyShip");
let slider = document.querySelector(".slider-images");
let sliderImage = document.querySelectorAll(".slider-images img");
let trigger = document.querySelector(".trigger");

let counter = 0;
let size = sliderImage[0].clientWidth;

rightClick.addEventListener("click", () => {
  if (counter >= sliderImage.length - 1) return;
  slider.style.transition = "0.6s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

leftClick.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "0.6s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
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
let i = 0;
triggerDot[i].classList.add("colored");

rightClick.onclick = () => {
  triggerDot[i].classList.remove("colored");
  i++;
  if (i > 2) {
    i = 0;
  }
  triggerDot[i].classList.add("colored");
};

leftClick.onclick = () => {
  triggerDot[i].classList.remove("colored");
  i--;
  if (i < 0) {
    i = 2;
  }
  triggerDot[i].classList.add("colored");
};
