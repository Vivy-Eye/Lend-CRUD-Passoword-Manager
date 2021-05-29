"use strict";

// ### Base variables
const dropper = document.querySelector("div.dropper");
const input_file = document.getElementById("dropper__i-file");

// ### Heandlers
input_file.addEventListener("change", sendFileInner, false);

function sendFileInner() {
  let reader = new FileReader();

  reader.readAsText(this.files[0]);
  reader.onload = function() {
    form.appendChild(getTable(JSON.parse(reader.result)).table)
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
}
