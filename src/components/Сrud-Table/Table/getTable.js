"use strict";

/**
 * getTable([{},{},{}], 0, 3)
 * @param {Array} db DB template in main.js
 * @param {Number} counter Start row position
 * @param {Number} step How many rows show
 * @returns {Array} HTML Object and counter
 */
function getTable(db, counter = 0, step = 250) {
  // Make rows container
  const div = document.createElement("div");
  // Make end point
  let end = counter + step;

  for (; counter < end && counter < db.length; counter++)
    // Add row in container
    div.append(getRow(db[counter]));

  // Return {container with rows, counter}
  return { table: div, counter: counter };
}
