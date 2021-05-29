"use strict";

const log = t => console.log(t);

function searchRow() {
  const schV = this.value.toLocaleLowerCase();
  const rows = form.querySelectorAll(".row");

  rows.forEach( row => {
    const cells = row.querySelectorAll(".cell");

    for(let i = 0; cells.length > i; i++){
      const btnV = cells[i].querySelector(".cell__value")
        .value.toLocaleLowerCase();

      if (schV == ""){
        row.style.display = "";
        break
      } else if (~btnV.indexOf(schV)){
        row.style.display = ""
        break
      } else{
        row.style.display = "none";
      }
    }

    // cells.forEach( cell => {
    //   const btnV = cell.querySelector(".cell__value")
    //     .value.toLocaleLowerCase();

    //   // schV == "" ? row.style.display = "" :
    //   //   ~btnV.indexOf(schV) ? row.style.display = "" :
    //   //     row.style.display = "none";
    // })
  })
}

function findTableColum(input) {
  const rows = document.querySelectorAll("#table-area tbody tr");

  rows.forEach((row) => {
    div = row.querySelector("div." + input.id);

    if (input.value == "") row.setAttribute("style", "");
    else if (~div.innerText.toLocaleLowerCase().indexOf(input.value))
      row.setAttribute("style", "");
    else row.setAttribute("style", "display: none");
  });
}


/**
 * 
 */
// function searchRow() {
  // const text = this.value;
  // const rows = form.querySelectorAll("row");

  // rows.forEach( row =>{
  //   const cells = row.querySelectorAll("cell");

  //   cells.forEach( cell =>{
  //     const inputs = cell.querySelectorAll("forSearch");

  //     inputs.forEach( input =>{
  //       const value = input.value;
        
  //       alert("")
  //       if (text == "") row.style.display = "";
  //       else if (~value.indexOf(text)) row.style.display = "";
  //       else row.style.display = "none";
  //     })
  //   })
  // })
// }

// if (text == "")
// row.style.display = "";
// else if (~value.indexOf(text))
// row.style.display = "";
// else
// row.style.display = "none";

// const searchInTable = (value) => {
//   const rows = document.querySelectorAll("tbody tr");
//   Row_in_table: for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];

//     if (value == "") row.setAttribute("style", "visibility: visible");
//     else if (~row.querySelector("a").innerHTML.indexOf(value))
//       row.setAttribute("style", "visibility: visible");
//     else row.setAttribute("style", "visibility: hidden");
//   }
// };