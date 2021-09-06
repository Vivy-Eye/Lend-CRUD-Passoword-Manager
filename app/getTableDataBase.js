"use strict";

/**
 * @returns {Array} Array [{},{},{}]
 */
 function getTableDataBase() {
	const //
		database = [],
		g = (str, obj = document) => obj.querySelector(str),
		gl = (str, obj) => obj.querySelectorAll(str),
		Container = g(".table-container"),
		Rows = gl(".row", Container);

	Rows.forEach((Row) => {
		const //
			array = [],
			Cells = gl(".cell", Row);

		Cells.forEach((Cell) => {
			const //
				_ = (str) => g(str, Cell).value,
				inp_name = _(".cell__name"),
				inp_value = _(".cell__value");

			array.push([inp_name, inp_value]);
		});

		database.push(Object.fromEntries(array));
	});

	return database;
}
