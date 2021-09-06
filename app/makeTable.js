"use strict";

/**
 * @param {String} place
 * @returns {Object HTML}
 */
const makeButtonsFor = (place = "row") => {
	const //
		cr = (str) => document.createElement(str),
		ev = (obj, ev) => obj.addEventListener("click", ev, false),
		stClass = (obj, str) => (obj.classList = place + str),
		setText = (obj, str) => (obj.innerText = str),
		Buttons = cr("div"),
		add = cr("button"),
		del = cr("button");

	stClass(Buttons, "__buttons");
	stClass(add, "__btn-add");
	stClass(del, "__btn-del");

	setText(add, "+");
	setText(del, "-");

	ev(add, handler_onBtnsAddTableElement);
	ev(del, handler_onBtnsDeleteTableElement);

	Buttons.append(add);
	Buttons.append(del);

	return Buttons;
};

/**
 * @param {String} cell__name
 * @param {String} cell__value
 * @returns {Object HTML}
 */
const makeCellFields = ({ cell_name, cell_value }) => {
	const //
		ev = (obj, ev) => obj.addEventListener("click", ev, false),
		CellFields = document.createElement("div"),
		Ina = document.createElement("input"),
		Iva = document.createElement("input");

	CellFields.classList = "cell__fields";

	[Ina.classList, Iva.classList] = ["cell__name", "cell__value"];
	[Ina.type, Iva.type] = ["text", "text"];
	[Ina.maxLength, Iva.maxLength] = [120, 120];
	[Ina.value, Iva.value] = [cell_name, cell_value];
	// [Ina.readOnly, Iva.readOnly] = [true, true];
	[Ina, Iva].map((input) => CellFields.append(input));

	ev(Ina, handler_autocopy);
	ev(Iva, handler_autocopy);

	return CellFields;
};

/**
 * @param {String} cell_name
 * @param {Object} cell_value
 * @returns {Object HTML}
 */
const makeCell = ({ cell_name, cell_value }) => {
	const //
		Cell = document.createElement("span"),
		Fields = makeCellFields({ cell_name, cell_value }),
		Buttons = makeButtonsFor("cell");

	Cell.classList = "cell";
	Cell.append(Fields);
	Cell.append(Buttons);

	return Cell;
};

/**
 * @param {Object} row_obj
 * @returns {Object HTML}
 */
const makeRow = ({ row_obj }) => {
	const //
		Row = document.createElement("div"),
		Buttons = makeButtonsFor("row");

	try {
		// Try add cells and buttons in row
		Row.classList = "row glassmorphism-base";
		Row.append(Buttons);

		for (let name in row_obj) {
			const //
				cell_value = row_obj[name],
				cell_name = name,
				cell_obj = { cell_name, cell_value },
				Cell = makeCell(cell_obj);

			Row["attr-tag"] += ` ${cell_name} ${cell_value}`;
			Row.append(Cell);
		}
	} catch (error) {
		console.info(error);
	}

	return Row;
};

/**
 * @param {Array} database
 * @returns {Object HTML}
 */
function makeTable({ database }) {
	const //
		Table = document.createElement("div"),
		add = (obj) => Table.append(obj),
		row = (obj) => makeRow(obj);

	try {
		// Try add rows in table
		database.map((row_obj) => add(row({ row_obj })));
	} catch (error) {
		console.info(error);
	}

	Table.classList = "table-wrap";

	return Table;
}
