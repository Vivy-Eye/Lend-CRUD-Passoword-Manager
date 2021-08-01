"use strict";

const btn_file = document
  .getElementById("crud-table")
  .querySelector(".panel-dropper__btn-file");

btn_file.addEventListener("change", getDataMakeTable, false);

/**
 * getDataMakeTable(this)
 */
function getDataMakeTable() {
  const Table = document.getElementById("crud-table").querySelector(".table");
  
  const reader = new FileReader();
  const file = this.files[0];

  reader.readAsText(file);
  reader.onload = function () {
    const answer = reader.result;
    const dataJSON = JSON.parse(answer);
    const table = getTable(dataJSON).table;

    Table.appendChild(table);
    // Table.appendChild(getTable(JSON.parse(reader.result)).table);
  };

  reader.onerror = function () {
    alert(reader.error);
    // console.log(reader.error);
  };
}
