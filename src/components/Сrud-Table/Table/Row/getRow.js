"use strict";

/**
 * getRow({})
 * @param {Array} object
 * @returns Object HTML
 */
function getRow(object) {
  // Make row of table
  const row = document.createElement("div");
  row.classList = "row";

  // Make btns container
  const span = document.createElement("span");
  span.classList = "row__buttons";
  // Make btns for row
  ((iDellR, iAddR) => {
    iDellR.type = "button";
    iDellR.classList = "row__i-dell";
    iDellR.value = "x";
    iAddR.type = "button";
    iAddR.classList = "row__i-add";
    iAddR.value = "+";

    iDellR.addEventListener("click", dellRow, false);
    span.append(iDellR);
    iAddR.addEventListener("click", addRow, false);
    span.append(iAddR);
  })(document.createElement("input"), document.createElement("input"));
  // Add btns in row
  row.append(span);

  // Make and add cells in row
  for (var name in object) row.append(getCell(name, object));

  // Return row with cells and btns
  return row;
}
