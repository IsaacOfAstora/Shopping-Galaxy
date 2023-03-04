
let leftClick = document.querySelector(".icon-leftGalaxyShip")
let rightClick = document.querySelector(".icon-rightGalaxyShip")
let sliderImage = document.querySelector(".slider-images")





leftClick.onclick = () => {
    sliderImage.classList.remove("slidingRight");
    sliderImage.classList.add("slidingLeft");
}

rightClick.onclick = () => {
    sliderImage.classList.remove("slidingLeft");
    sliderImage.classList.add("slidingRight");
}