"use strict";

function getCellFields({ name, value }) {
  const div = document.createElement("div");
  const Create = (type) => document.createElement(type);
  const [ina, iva] = [Create("input"), Create("input")];

  [ina.classList, iva.classList] = ["cell__name", "cell__value"];
  [ina.type, iva.type] = ["text", "text"];
  [ina.maxLength, iva.maxLength] = [120, 120];
  [ina.value, iva.value] = [name, value];
  [ina.readOnly, iva.readOnly] = [true, true];

  div.classList = "cell__fields";
  [ina, iva].map((el) => div.appendChild(el));

  return div;
}
