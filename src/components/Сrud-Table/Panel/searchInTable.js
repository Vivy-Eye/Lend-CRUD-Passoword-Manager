"use strict";

const log = (t) => console.log(t);

function searchInTable() {
  const schV = this.value.toLocaleLowerCase();
  const rows = form.querySelectorAll(".row");

  rows.map((row) => {
    const cells = row.querySelectorAll(".cell");

    for (let i = 0; cells.length > i; i++) {
      const btnV = cells[i]
        .querySelector(".cell__value")
        .value.toLocaleLowerCase();

      if (schV == "") {
        row.style.display = "";
        break;
      } else if (~btnV.indexOf(schV)) {
        row.style.display = "";
        break;
      } else {
        row.style.display = "none";
      }
    }
  });
}

function findTableColum(input) {
  const rows = document.querySelectorAll("#table-area tbody tr");

  rows.forEach((row) => {
    div = row.querySelector("div." + input.id);

    if (input.value == "") row.setAttribute("style", "");
    else if (~div.innerText.toLocaleLowerCase().indexOf(input.value))
      row.setAttribute("style", "");
    else row.setAttribute("style", "display: none");
  });
}
