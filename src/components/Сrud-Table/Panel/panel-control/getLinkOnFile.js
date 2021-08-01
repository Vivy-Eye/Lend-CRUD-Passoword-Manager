"use strict";

/**
 * getLinkOnFile(ev)
 * @param {*} ev
 * @returns
 */
function getLinkOnFile(ev) {
  ev.preventDefault();
  const file_name = prompt("File Name") || "File_" + Math.random().toString(16);

  // Create file
  const database = getDBinTable();
  const text = JSON.stringify(database);
  const file = new Blob([text], { type: "application/json" });

  // Create html object link on file
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(file));
  link.setAttribute("download", `${file_name}.json`);
  link.textContent = `${file_name}`;
  URL.revokeObjectURL(file);

  // Return the link
  return link;
}

/**
 * getDBinTable()
 * @returns Array [{},{},{}]
 */
function getDBinTable() {
  const database = [];
  const Rows = document
    .getElementById("crud-table")
    .querySelectorAll(".table .row");

  Rows.forEach((Row) => {
    const array = [];
    const cells = Row.querySelectorAll(".cell");

    cells.forEach((cell) => {
      const name = cell.querySelector("input.cell__name").value;
      const value = cell.querySelector("input.cell__value").value;

      array.push([name, value]);
    });

    database.push(Object.fromEntries(array));
  });

  return database;
}
