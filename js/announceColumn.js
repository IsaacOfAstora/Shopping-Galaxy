
let leftClick = document.querySelector(".icon-leftGalaxyShip")
let rightClick = document.querySelector(".icon-rightGalaxyShip")
let slider = document.querySelector(".slider-images")
let sliderImage = document.querySelectorAll(".slider-images img")
let trigger = document.querySelectorAll(".image-trigger span")



let counter = 0;

let size = sliderImage[0].clientWidth;
trigger[counter].classList.add("colored")


rightClick.addEventListener("click", ()=>{
    if (counter >= sliderImage.length -1) return;
    slider.style.transition= "0.6s ease-in-out";
    counter++;
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
    trigger[counter].classList.add("colored")
    trigger[counter-1].classList.remove("colored")
})


leftClick.addEventListener("click", ()=>{
    if (counter <= 0) return;
    slider.style.transition= "0.6s ease-in-out";
    counter--
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
    trigger[counter+1].classList.remove("colored")
    trigger[counter].classList.add("colored")
})

slider.addEventListener("transitionend", ()=>{
if (sliderImage[counter].id === "lastClone"){
    slider.style.transition= "none";
    counter = sliderImage.length - 2;
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
}
if (sliderImage[counter].id === "firstClone"){
    slider.style.transition= "none";
    counter = sliderImage.length - counter;
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';

}
})

