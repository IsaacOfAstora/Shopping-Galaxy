let trigger = document.querySelectorAll(".trigger span")
let next = document.querySelector("icon-rightGalaxyShip")
let prev = document.querySelector("icon-leftGalaxyShip")

i = 0;
trigger[i].classList.add("colored");
next.onclick = ()=>{

if (i<=2) {
    trigger[i].classList.remove("colored");
    i++
    trigger[i].classList.add("colored");
}


}
prev.onclick = ()=>{

    if (i>0) {
    trigger[i].classList.remove("colored");
    i--
    trigger[i].classList.add("colored");
    }

}