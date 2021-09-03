"use strict";

const findPa = (el, i = 1) => {
	let Pa = el.parentElement;
	for (; i > 1; i--) Pa = findPa(Pa);
	return Pa;
};

function addTableEl() {
	const Pa = findPa(this, 2);
	const template = {};
	const Cells = Pa.querySelectorAll(".cell");
	let NewEl;

	if (Cells.length) {
		Cells.forEach((Cell) => {
			const name = Cell.querySelector("input.cell__name").value;
			const value = Cell.querySelector("input.cell__value").value;

			template[name || ""] = value || "";
		});
		NewEl = getRow(template);
	}

	if (!Cells.length) {
		NewEl = getCell("", "");
	}

	console.info(NewEl);
	Pa.insertAdjacentElement("afterend", NewEl);
}

function dellTableEl() {
	const El = findPa(this, 2);
	El.remove();
}
