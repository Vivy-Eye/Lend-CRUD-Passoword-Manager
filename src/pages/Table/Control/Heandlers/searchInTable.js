"use strict";

function searchInTable({ string = "", Container = document }) {
  const Rows = Container.querySelectorAll(".row");

  Rows.forEach((Row) => {
    const Cells = Row.querySelectorAll(".cell");

    for (let i = 0; Cells.length > i; i++) {
      const Cell = Cells[i];
      const val = (sel) => Cell.querySelector(sel).value.toLocaleLowerCase();
      const Value = val(".cell__value");
      const Name = val(".cell__name");
      const bool = Name.includes(string) || Value.includes(string);

      if (bool) {
        Row.style.display = "";
        break;
      } else {
        Row.style.display = "none";
      }
    }
  });
}
