"use strict";

const log = (t) => console.log(t);

function searchInTable() {
  // const schV = this.value.toLocaleLowerCase();
  const T = this.value.toLocaleLowerCase();

  const Rows = document.querySelectorAll(".row");

  Rows.forEach((Row) => {
    const Cells = Row.querySelectorAll(".cell");

    for (let i = 0; Cells.length > i; i++) {
      const V = Cells[i]
        .querySelector(".cell__value")
        .value.toLocaleLowerCase();

      if (~V.indexOf(T)) {
        Row.style.display = "";
        break;
      } else {
        Row.style.display = "none";
        break;
      }
    }
  });
}
