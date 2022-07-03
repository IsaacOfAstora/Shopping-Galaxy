/*____________________Adding Cart Elements____________________*/

/*____________________Adding End____________________*/

/*<!-----!>*/
/*<!-----!>*/
/*<!-----!>*/

/*<!-Removing a Cart element with profficional CSS animation-!>*/
let removeButton = document.getElementsByClassName("cartRemover");

for (let i = 0; i < removeButton.length; i++) {
  let buttonRemove = removeButton[i];
  buttonRemove.addEventListener("click", function (item) {
    let Removing = item.target.parentElement.parentElement;
    Removing.classList.add("vanquish") +
      setTimeout(() => {
        Removing.remove();
      }, 300);
  });
}

/*<!-Removing a Cart element with profficional CSS animation End-!>*/
