/*____________________Adding Cart Elements____________________*/

/*____________________Adding End____________________*/

/*<!-----!>*/
/*<!-----!>*/
/*<!-----!>*/

/*<!-Removing a Cart element with profficional CSS animation-!>*/
let removeButton = document.getElementsByClassName("cartRemover");

for (let i = 0; i < removeButton.length; i++) {
  let buttonRemove = removeButton[i];
  buttonRemove.addEventListener("click", function (params) {
    let Removing =
      params.target.parentElement.parentElement.classList.add("vanquish") +
      setTimeout(() => {
        params.target.parentElement.parentElement.remove();
      }, 200);
  });
}

/*<!-Removing a Cart element with profficional CSS animation End-!>*/
