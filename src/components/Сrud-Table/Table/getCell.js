"use strict";

/**
 * getCell("type1", {})
 * @param {Text} name
 * @param {Array} obj
 * @returns Object HTML
 */
function getCell(name, obj) {
  // Make cell
  const cell = document.createElement("span");
  cell.classList = "cell";

  // Make and add inputs
  const icName = document.createElement("input");
  const icValue = document.createElement("input");

  icName.type = "text";
  icName.classList = "cell__name forSearch";
  icName.value = name;
  icValue.type = "text";
  icValue.classList = "cell__value forSearch";
  icValue.value = obj[name];
  cell.append(icName);
  cell.append(icValue);

  // Make btnd container
  const span_btn = document.createElement("span");
  span_btn.classList = "cell__buttons";
  ((iDellC, iAddC) => {
    iDellC.type = "button";
    iDellC.classList = "cell__i-dell";
    iDellC.value = "x";
    iAddC.type = "button";
    iAddC.classList = "cell__i-add";
    iAddC.value = "+";

    iDellC.addEventListener("click", dellCell, false);
    span_btn.append(iDellC);
    iAddC.addEventListener("click", addCell, false);
    span_btn.append(iAddC);
  })(document.createElement("input"), document.createElement("input"));
  // Add btns in cell
  cell.append(span_btn);

  return cell;
}
