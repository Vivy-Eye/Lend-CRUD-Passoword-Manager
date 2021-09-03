"use strict";

/**
 * addFileToTable({ name })
 */
function addFileToTable({ name }) {
	try {
		const str = getStor({ name });
		const db = JSON.parse(str);
		const ta = db && getTable({ db });
		const co = document.querySelector(".table-container");

		console.info(`Table with ${ta.counter} Rows`);
		co.appendChild(ta.table);
	} catch (error) {
		alert(error);
	}
}
