"use strict";

function makeFileUrl(ev) {
	// ev.preventDefault();

	const //
		database = getTableDataBase(),
		// database = testDB,
		file_text = JSON.stringify(database),
		mime_type = "application/json" || "text/plain",
		file = new Blob([file_text], { type: mime_type }),
		file_url = URL.createObjectURL(file);

	URL.revokeObjectURL(File);
	return file_url;
}

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
