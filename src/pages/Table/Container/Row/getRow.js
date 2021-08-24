"use strict";

/**
 * getRow({})
 * @param {Array} object
 * @returns Object HTML
 */
function getRow(object) {
  const row = document.createElement("div");
  const buttons = getButtons("row");

  row.classList = "row";
  row.appendChild(buttons);

  for (var name in object) {
    const value = object[name];
    const cell = getCell(name, value);

    row.append(cell);
  }

  return row;
}
