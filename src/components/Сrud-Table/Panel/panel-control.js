"use strict";

(() => {
  // Main Container
  const CT = document.getElementById("crud-table");
  // Table Container
  const Table = CT.querySelector(".table");
  // Button search in control panel
  const btn_search = CT.querySelector(".panel-control__btn-search");
  // Button create row in control panel
  const btn_create_row = CT.querySelector(".panel-control__btn-create-row");
  // Button create file in control panel
  const btn_create_file = CT.querySelector(".panel-control__btn-create-file");

  // Simple Teplate for creating Table
  const template_db = [{ "#1": "sdwal", "#2": "drad", "#3": "lkao" }];
  // Function for add chindren
  const add = (a, b) => a.appendChild(b);

  // Event "search"
  // btn_search.addEventListener("keyup", searchRow, false);

  // Event "create row"
  btn_create_row.addEventListener(
    "click",
    () => add(Table, getTable(template_db).table),
    false
  );

  // Event "create file"
  btn_create_file.addEventListener(
    "click",
    (ev) => {
      add(document, getLinkOnFile(ev));
    },
    false
  );
})();
