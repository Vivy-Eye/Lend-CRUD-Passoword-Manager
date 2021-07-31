"use strict";

/**
 * getRow({})
 * @param {Array} object
 * @returns Object HTML
 */
 function getRow(object) {
  const row = document.createElement("div"); // Make "row"
  row.classList = "row";

  // Add cells
  for (var name in object)
    row.appendChild(getCell(name, object));

  // Add buttons
  const span = document.createElement("span");
  span.classList = "row__buttons";
  ((iDellR, iAddR)=>{
    iDellR.type = "button";
    iDellR.classList = "row__i-dell";
    iDellR.value = "x";

    iDellR.addEventListener('click', dellRow, false);
    span.append(iDellR);

    iAddR.type = "button";
    iAddR.classList = "row__i-add";
    iAddR.value = "+";

    iAddR.addEventListener('click', addRow, false);
    span.append(iAddR);
  })(document.createElement("input"),document.createElement("input"))
  row.append(span);

  return row;
}