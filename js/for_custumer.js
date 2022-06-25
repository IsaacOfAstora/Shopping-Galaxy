/*____________________Adding Cart Elements____________________*/

/*____________________Adding End____________________*/

/*<!-----!>*/
/*<!-----!>*/
/*<!-----!>*/

/*<!-Removing a Cart element with profficional CSS animation-!>*/

let cartItemRemover = document.getElementsByClassName("remover");
let crto = document.querySelector(".remover");

for (let i = 0; i < cartItemRemover.length; i++) {
  let removeButton = cartItemRemover[i];

  removeButton.addEventListener("click", function (param) {
    buttonRemoving =
      param.target.parentElement.parentElement.parentElement.classList.add(
        "vanquish"
      );
    +setTimeout(function () {
      param.target.parentElement.parentElement.parentElement.remove();
    }, 400);
  });
}
/*<!-Removing a Cart element with profficional CSS animation End-!>*/
