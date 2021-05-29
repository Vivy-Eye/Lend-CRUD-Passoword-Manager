"use strict";

// ### Base variables
const crud = document.querySelector(".crud");
const form = crud.querySelector('.crud__form');

const input_searchRow = crud.querySelector(".crud__i-search-base");
const input_createFile = crud.querySelector(".crud__i-create-file");
const input_createBase = crud.querySelector(".crud__i-create-base");
const file_container = crud.querySelector(".crud__file-links");

// ### Heandlers
input_searchRow.addEventListener("keyup", searchRow, false);

// File input Creater
input_createFile.addEventListener("click", (ev)=>{
  file_container.appendChild(getFileLink(ev))
}, false)

// Add base row in table
input_createBase.addEventListener("click", ()=>{  
  const template_db = [{"#1":"sdwal","#2":"drad","#3":"lkao"}];
  form.appendChild(getTable(template_db).table)
}, false)
