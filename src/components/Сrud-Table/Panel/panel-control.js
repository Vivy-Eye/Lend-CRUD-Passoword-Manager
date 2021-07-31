"use strict";

(() => {
  const CT = document.getElementById("crud-table");
  const Table = CT.querySelector(".table");
  const btn_search = CT.querySelector(".panel-control__btn-search");
  const btn_create_row = CT.querySelector(".panel-control__btn-create-row");
  const btn_create_file = CT.querySelector(".panel-control__btn-create-file");

  // btn_search.addEventListener("keyup", searchRow, false);

  const template_db = [{ "#1": "sdwal", "#2": "drad", "#3": "lkao" }];
  const add = (a, b) => a.appendChild(b);

  btn_create_row.addEventListener(
    "click",
    () => add(Table, getTable(template_db).table),
    false
  );

  btn_create_file.addEventListener(
    "click",
    (ev) => add(document, getLinkOnFile(ev)),
    false
  );
})();
