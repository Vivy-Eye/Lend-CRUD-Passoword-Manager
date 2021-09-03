"use strict";

(() => {
	const Control = document.querySelector(".control") || document.body;
	const Container = document.querySelector(".table-container");
	const add = (el, obj) => el.appendChild(obj);
	const eve = (el, fu, ev) => el.addEventListener(ev || "click", fu, false);
	const get = (el) => Control.querySelector(el);
	const btn_search = get(".control__btn-search");
	const btn_addRow = get(".control__btn-add");
	const btn_create = get(".control__btn-create");
	const btn_delTable = get(".control__btn-delete-table");
	const btn_delFiles = get(".control__btn-delete-files");
	const btn_hideVal = get(".control__btn-hide");
	const btn_edit = get(".control__btn-edit");

	// Add heandlers
	eve(btn_search, headnler_search, "keyup");
	eve(btn_addRow, headnler_addRow);
	eve(btn_create, headnler_create);
	eve(btn_delTable, headnler_delTable);
	eve(btn_delFiles, headnler_delFiles);
	eve(btn_hideVal, headnler_hideVal, "change");
	eve(btn_edit, headnler_editing, "change");

	// The headnlers
	function headnler_search() {
		// Search in table
		const string = this.value.toLocaleLowerCase();
		searchInTable({ string, Container });
	}

	function headnler_addRow() {
		// Add row in table
		const db = [{ "": "" }];
		const t = getTable({ db });
		t && add(Container, t.table);
	}

	function headnler_create() {
		// Create file link and on page
		const container = document.querySelector(".files_links");
		const link = getLinkOnFile(this);
		link && add(container, link);
	}

	function headnler_delTable() {
		// Delet Table
		const content = Container.querySelectorAll("div");
		content.forEach((el) => el.remove());
	}

	function headnler_delFiles() {
		// Delete files cash and on page
		const files = document.querySelector(".files_list");
		const content = files.querySelectorAll("div");
		content.forEach((el) => el.remove());
		sessionStorage.clear();
		localStorage.clear();
	}

	function headnler_hideVal() {
		toggleClassValue(Container, "hide_cells_values");
	}

	function headnler_editing() {
		const bool = this.checked;
		toggleTableEditing({ bool, Container });
		toggleClassValue(Container, "no_editing");
	}
})();
