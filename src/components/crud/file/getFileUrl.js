"use strict";

/**
 * 
 * @param {*} ev 
 * @returns 
 */
function getFileLink(ev) {
  ev.preventDefault();

  const file_name = prompt("Name")||"Data";

  // Create file
  const file_inner = JSON.stringify(getFileInner());
  const file = new Blob([file_inner], {type: "application/json"});

  // Create file link
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", `${file_name}.json`);
  link.textContent = `Download "${file_name}"`;
  URL.revokeObjectURL(file);

  return link
}

/**
 * 
 * @returns Array [{},{},{}]
 */
function getFileInner() {
  const future_DB = [];
  const rows = form.querySelectorAll(".row");
  
  rows.forEach( row => {
    const cell_array = [];
    const cells = row.querySelectorAll(".cell");

    cells.forEach( cell => {
      const icName = cell.querySelector('input.cell__name');
      const icValue = cell.querySelector('input.cell__value');
      cell_array.push([icName.value, icValue.value])
    })

    future_DB.push(Object.fromEntries(cell_array));
  })

  return future_DB
}