"use strict";

function makeFileUrl(ev) {
	// ev.preventDefault();

	const //
		// database = getTableDataBase(),
		database = testDB,
		file_text = JSON.stringify(database),
		mime_type = "application/json" || "text/plain",
		File = new Blob([file_text], { type: mime_type }),
		file_url = URL.createObjectURL(File);

	// URL.revokeObjectURL(File);
	return file_url;
}

// /**
//  * getDBinTable()
//  * @returns Array [{},{},{}]
//  */
// function getTableDB() {
// 	const DB = [];
// 	const Container = Places.table_container;
// 	const Rows = _getAll(".row", Container);

// 	Rows.forEach((Row) => {
// 		const array = [];
// 		const Cells = _getAll(".cell", Row);
// 		Cells.forEach((Cell) => {
// 			const name = _get(".cell__name", Cell).value;
// 			const value = _get(".cell__value", Cell).value;

// 			array.push([name, value]);
// 		});

// 		DB.push(Object.fromEntries(array));
// 	});

// 	return DB;
// }
