$("nav .button").click(function () {
  $("nav .button span i").toggleClass("rotate");
  $("nav .button .menu").toggleClass("dropDown");
});

/*___________*/

$("nav .button-Products-html").click(function () {
  $("nav .button-Products-html span i").toggleClass("rotate");
  $("nav .button-Products-html .menu").toggleClass("dropDown");
});

const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const searchRemover = document.querySelector(".search-bar-remover");

searchIcon.onclick = () => {
  searchBar.classList.add("expanded");
  searchIcon.classList.add("expanded");
  searchInput.classList.add("expanded");
  searchRemover.classList.add("expanded");
};
searchRemover.onclick = () => {
  searchBar.classList.remove("expanded");
  searchIcon.classList.remove("expanded");
  searchInput.classList.remove("expanded");
  searchRemover.classList.remove("expanded");
};
/*________________________________________________________________ */
