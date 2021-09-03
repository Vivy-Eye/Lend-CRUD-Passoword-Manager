"use strict";

function addFile({ file }) {
	const Container = document.querySelector(".files_list");
	const name = `<button>${file.name || "Test"}</button>`;
	const size = `<i> ${file.size || "..."}KB</i>`;
	const html = name + size;
	const div = document.createElement("div");

	div.classList = "list__file";
	div.insertAdjacentHTML("beforeend", html);
	div.addEventListener("click", fileHeandler, false);

	function fileHeandler() {
		const name = this.querySelector("button").innerText;
		name && addFileToTable({ name });
	}

	Container.appendChild(div);
}
