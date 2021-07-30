"use strict";

/**
 * getRow({})
 * @param {Array} object
 * @returns Object HTML
 */
function getRow(object) {
  const row = document.createElement("div"); // Make "row"
  row.classList = "row";

  // Add cells
  for (var name in object)
    row.appendChild(getCell(name, object));

  // Add buttons
  const span = document.createElement("span");
  span.classList = "row__buttons";
  ((iDellR, iAddR)=>{
    iDellR.type = "button";
    iDellR.classList = "row__i-dell";
    iDellR.value = "x";

    iDellR.addEventListener('click', dellRow, false);
    span.append(iDellR);

    iAddR.type = "button";
    iAddR.classList = "row__i-add";
    iAddR.value = "+";

    iAddR.addEventListener('click', addRow, false);
    span.append(iAddR);
  })(document.createElement("input"),document.createElement("input"))
  row.append(span);

  return row;
}

/**
 * getCell("type1", {})
 * @param {Text} name 
 * @param {Array} obj 
 * @returns Object HTML
 */
function getCell(name, obj) {
  const cell = document.createElement("span");
  cell.classList = "cell";

  const span_cont = document.createElement("span");
  span_cont.classList = "cell__content";
  ((icName, icValue)=>{
    icName.type = "text";
    icName.classList = "cell__name forSearch";
    icName.value = name;
    span_cont.append(icName);

    icValue.type = "text";
    icValue.classList = "cell__value forSearch";
    icValue.value = obj[name];
    span_cont.append(icValue);    
  })(document.createElement("input"),document.createElement("input"))
  cell.append(span_cont);

  // Add buttons in cell
  const span_btn = document.createElement("span");
  span_btn.classList = "cell__buttons";
  ((iDellC, iAddC)=>{
    iDellC.type = "button";
    iDellC.classList = "cell__i-dell";
    iDellC.value = "x";

    iDellC.addEventListener('click', dellCell, false);
    span_btn.append(iDellC);

    iAddC.type = "button";
    iAddC.classList = "cell__i-add";
    iAddC.value = "+";

    iAddC.addEventListener('click', addCell, false);
    span_btn.append(iAddC);
  })(document.createElement("input"),document.createElement("input"))
  cell.append(span_btn);

  return cell;
}
