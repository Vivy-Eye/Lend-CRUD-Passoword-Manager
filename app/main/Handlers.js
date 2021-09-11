"use strict";

const TableContainer = document.querySelector(".table-wrap");
const FilesListContainer = document.querySelector(".files-list__container");
const FilesOutContainer = document.querySelector(".files-out__container");

function handler_onload() {
	try {
		// Add storage files on page
		GetStorAll().map((file_name) => {
			const //
				file = { name: file_name },
				File = makeFileContainer(file);

			FilesListContainer.append(File);
		});
	} catch (error) {
		console.info("Files in storage do not added on page");
		console.info(error);
	}
}

function handler_onDropFiles() {
	try {
		const files = this.files;

		[...files].forEach(async (file) => {
			const //
				name = file.name,
				text = await readFile(file),
				File = makeFileContainer(file);

			// Add file in storage and page
			AddStor(name, text);
			File && FilesListContainer.append(File);
		});
	} catch (error) {
		console.info("Error in drop file, file is not added");
		console.info(error);
	}
}

function handler_onFileButton() {
	try {
		const //
			file_name = this.querySelector(".file_name").innerText,
			file_text = file_name && GetStor(file_name),
			database = file_text && JSON.parse(file_text),
			Table = database && makeTable({ database }),
			Rows = Table.querySelectorAll(".row");

		// Add table (rows) on page
		Rows.forEach((Row) => TableContainer.append(Row));
	} catch (error) {
		console.info("File table do not added on page");
		console.info(error);
	}
}

function handler_onSearchInput() {
	// Need change this search handler & function
	try {
		const query = {
			query: this.value,
			Container: TableContainer,
		};
		searchInTable(query);
	} catch (error) {
		console.info("Serach is not finished");
		console.info(error);
	}
}

function handler_onBtnCreateFile() {
	try {
		const //
			database = getTableDataBase(),
			url = makeFileUrl(database),
			name = prompt("Name") || Math.random().toString(16),
			file = { name: name, link: url },
			File = makeFileContainer(file);

		// Add download file link on page
		FilesOutContainer.append(File);
	} catch (error) {
		console.info("File is not created");
		console.info(error);
	}
}

function handler_onBtnAddRow() {
	try {
		const //
			random = MD5(getRandomInt()),
			name = "Name " + random.substring(0, 5),
			value = random,
			database = [{ [name]: value }],
			// Make table
			Table = makeTable({ database }),
			Rows = Table.querySelectorAll(".row");
		// Add table (rows) on page
		Rows.forEach((Row) => TableContainer.append(Row));
	} catch (error) {
		console.info("Row is not added");
		console.info(error);
	}
}

function handler_onBtnDeleteTable() {
	// Just html = ""
	// Need change this handler
	TableContainer.innerHTML = "";
}

function handler_onBtnDeleteFiles() {
	// Just clear container and storages
	FilesListContainer.innerHTML = "";
	sessionStorage.clear();
	localStorage.clear();
}

function handler_onHideValueInput() {
	// Just toggle class
	// Need change, add, remove
	TableContainer.classList.toggle("tc-s-cell_hide_values");
}

function handler_onEditingValueInput() {
	const //
		bool = this.checked,
		inputs = TableContainer.querySelectorAll("input");

	try {
		if (bool && inputs) {
			inputs.forEach((i) => i.removeAttribute("readOnly"));
			TableContainer.classList.remove("tc-s-cell_no_editing");
		}
		if (!bool && inputs) {
			inputs.forEach((i) => (i.readOnly = true));
			TableContainer.classList.add("tc-s-cell_no_editing");
		}
	} catch (error) {
		console.info("Can not change editing settings");
		console.info(error);
	}
}

function handler_onBtnsAddTableElement() {
	try {
		let NewElement;
		const //
			// Get cell name & value
			get = (str, pa) => pa.querySelector("input.cell__" + str),
			random = MD5(getRandomInt()),
			name = "Name " + random.substring(0, 5),
			value = random,
			getName = (pa) => get("name", pa).value || name,
			getValue = (pa) => get("value", pa).value || value,
			// Get Father
			Pa = GetPa(this, 2),
			// Get cells
			Cells = Pa.querySelectorAll(".cell");

		if (!Cells.length) {
			const //
				cell_name = getName(Pa),
				cell_value = getValue(Pa);
			// Make a new element for page
			NewElement = makeCell({ cell_name, cell_value });
		}

		if (Cells.length) {
			const // Make template
				row_temp = {};
			Cells.forEach((Cell) => {
				const //
					cell_name = getName(Cell),
					cell_value = getValue(Cell);

				// Add cells in template
				row_temp[cell_name] = cell_value;
			});
			// Make a new element for page
			const row = { row_obj: row_temp };
			NewElement = makeRow(row);
		}

		// Add a new element on page
		Pa.insertAdjacentElement("afterend", NewElement);
	} catch (error) {
		console.info("A new element do not added");
		console.info(error);
	}
}

function handler_onBtnsDeleteTableElement() {
	// Just remove Father
	GetPa(this, 2).remove();
}

function handler_autocopy() {
	// !!! Just autoselect
	this.select();
	// document.execCommand("copy");
}

(() => {
	// Add handlers to elements
	const //
		get = (str) => document.querySelector(str),
		ev = (obj, fu, ev = "click") => obj.addEventListener(ev, fu, false),
		file = get(".files__in-btn"),
		search = get(".control__btn-search"),
		addRow = get(".control__btn-add"),
		create = get(".control__btn-create"),
		delTable = get(".control__btn-delete-table"),
		delFiles = get(".control__btn-delete-files"),
		hideVal = get(".control__btn-hide"),
		edit = get(".control__btn-edit");

	ev(window, handler_onload, "load");
	ev(file, handler_onDropFiles, "change");
	ev(search, handler_onSearchInput, "keyup");
	ev(addRow, handler_onBtnAddRow);
	ev(create, handler_onBtnCreateFile);
	ev(delTable, handler_onBtnDeleteTable);
	ev(delFiles, handler_onBtnDeleteFiles);
	ev(hideVal, handler_onHideValueInput, "change");
	ev(edit, handler_onEditingValueInput, "change");
})();
