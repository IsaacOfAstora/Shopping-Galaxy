let leftClick = document.querySelector(".icon-leftGalaxyShip")
let rightClick = document.querySelector(".icon-rightGalaxyShip")
let slider = document.querySelector(".slider-images")
let sliderImage = document.querySelectorAll(".slider-images img")
let trigger = document.querySelectorAll(".trigger span")



let counter = 0;

let size = sliderImage[0].clientWidth;
trigger[counter].classList.add("colored")


rightClick.addEventListener("click", ()=>{
    leftClick.classList.remove("colored")
    if (counter >= sliderImage.length -1) return;
    slider.style.transition= "0.6s ease-in-out";
    counter++;
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
    trigger[counter].classList.add("colored")
    trigger[counter-1].classList.remove("colored")
    if (counter == sliderImage.length -1) {
        rightClick.classList.add("colored")
    }
})


leftClick.addEventListener("click", ()=>{
    rightClick.classList.remove("colored")
    if (counter <= 0) return;
    slider.style.transition= "0.6s ease-in-out";
    counter--
    slider.style.transform = 'translateX('+ (-size * counter) + 'px)';
    trigger[counter+1].classList.remove("colored")
    trigger[counter].classList.add("colored")
    if (counter == 0) {
        leftClick.classList.add("colored")
    } 
})


    
    


