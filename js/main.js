$("nav .button").click(function () {
  $("nav .button span i").toggleClass("rotate");
  $("nav .button .menu").toggleClass("dropDown");
});

/*________________________________________________________________ */

$("nav .button-Products-html").click(function () {
  $("nav .button-Products-html span i").toggleClass("rotate");
  $("nav .button-Products-html .menu").toggleClass("dropDown");
});

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector(".input-box");
searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
};
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchInput.value = "";
};
/*________________________________________________________________ */
