"use strict";

/**
 * getLinkOnFile(ev)
 * @param {*} ev
 * @returns Object HTML
 */
function getLinkOnFile(ev) {
	// ev.preventDefault();

	const db = getTableDB();
	const str = JSON.stringify(db);
	const name = prompt("Name") || Math.random().toString(16);
	const File = new Blob([str], { type: "application/json" });
	const Link = document.createElement("a");

	Link.classList = "links__link";
	Link.textContent = name;
	Link.setAttribute("download", name);
	Link.setAttribute("href", URL.createObjectURL(File));
	URL.revokeObjectURL(File);

	return Link;
}

/**
 * getDBinTable()
 * @returns Array [{},{},{}]
 */
function getTableDB() {
	const DB = [];
	const get = (pa, el) => pa.querySelector(el);
	const getAll = (pa, el) => pa.querySelectorAll(el);
	const Rows = getAll(document, ".table-container .row");

	Rows.forEach((Row) => {
		const array = [];
		const Cells = getAll(Row, ".cell");
		Cells.forEach((Cell) => {
			const name = get(Cell, ".cell__name").value;
			const value = get(Cell, ".cell__value").value;

			array.push([name, value]);
		});

		DB.push(Object.fromEntries(array));
	});

	return DB;
}
