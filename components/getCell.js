"use strict";

/**
 * getCell("type1", {})
 * @param {Text} name
 * @param {Array} obj
 * @returns Object HTML
 */
function getCell(name, value) {
  const cell = document.createElement("span");
  const fields = getCellFields({ name, value });
  const buttons = getButtons("cell");

  cell.classList = "cell";
  cell.append(fields);
  cell.append(buttons);

  return cell;
}
