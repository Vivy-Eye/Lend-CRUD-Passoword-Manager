"use strict";

const findPa = (el, i = 1) => {
  let pa = el.parentElement;
  for(; i > 1; i--)
    pa = findPa(pa);
  return pa;
};

// ### ROW
function addRow() {
  const row = findPa(this, 2);
  const row_template = {};

  // Add Cells Names from "parent row" in template
  row.querySelectorAll(".cell")
    .forEach( cell => 
      row_template[cell.querySelector('input.cell__name')
      .value] = ""
    )

  // Add row with names before "parent row"
  row.insertAdjacentElement("afterend",
    getRow(row_template)
  );
}

function dellRow() {
  findPa(this, 2).remove()
}

// ### CELL
function addCell() {
  const cell = findPa(this, 2);
  cell.insertAdjacentElement("afterend",
    getCell("", {"": "",})
  );
}

function dellCell() {
  findPa(this, 2).remove()
}