"use strict";

/**
 * getTable([{},{},{}], 0, 3)
 * @param {Array} db DB template in main.js
 * @param {Number} counter Start row position
 * @param {Number} step How many rows show
 * @returns {Array} HTML Object and counter
 */
 function getTable(db, counter = 0, step = 250) {
  const div = document.createElement("div"); // Just a container
  let end = counter + step;

  for (; counter < end && counter < db.length; counter++)
    div.appendChild(getRow(db[counter])); // Add row in container
  return { table: div, counter: counter };
}

