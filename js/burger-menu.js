let burger = document.querySelector(".nav-toggle");
let burger1 = document.querySelector(".first");
let burger2 = document.querySelector(".second");
let burger3 = document.querySelector(".third");
let header = document.querySelector("header");
let navMenu = document.querySelector("nav");
let social = document.querySelector(".wrapper");

burger.onclick = () => {
  burger.classList.toggle("clicked");
  burger1.classList.toggle("clicked");
  burger2.classList.toggle("clicked");
  burger3.classList.toggle("clicked");
  header.classList.toggle("active");
  navMenu.classList.toggle("active");
  social.classList.toggle("active");
};
