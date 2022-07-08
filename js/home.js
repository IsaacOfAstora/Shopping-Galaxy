let signu_upu = document.querySelector(".sign-up-form");
let logu_inu = document.querySelector(".log-in-form");
let Already_Have = document.querySelector(".sign");
let Dont_Have = document.querySelector(".log");

signu_upu.classList.add("vanquish");

Dont_Have.onclick = () => {
  signu_upu.classList.remove("vanquish");
  logu_inu.classList.add("vanquish");
};
Already_Have.onclick = () => {
  signu_upu.classList.add("vanquish");
  logu_inu.classList.remove("vanquish");
};

/*--------------------------------- */
/*--------------------------------- */
/*--------------------------------- */
