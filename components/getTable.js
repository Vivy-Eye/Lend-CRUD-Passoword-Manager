"use strict";

/**
 * getTable([{},{},{}], 0, 3)
 * @param {Array} db DB template in main.js
 * @param {Number} counter Start row position
 * @param {Number} step How many rows show
 * @returns {Object} Object with HTML Object and counter
 */
function getTable({ db, counter = 0, step = 250 }) {
  const table = document.createElement("div");
  const end = counter + step;

  for (; counter < end && counter < db.length; counter++) {
    const obj = db[counter] || { a: "", b: "" };
    const row = getRow(obj);
    row && table.appendChild(row);
  }

  return { table: table, counter: counter };
}
