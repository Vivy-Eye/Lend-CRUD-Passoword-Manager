"use strict";

(() => {
	const File = document.querySelector(".files") || document.body;
	const add = (el, obj) => el.appendChild(obj);
	const eve = (el, fu, ev) => el.addEventListener(ev || "click", fu, false);
	const get = (el) => File.querySelector(el);
	const btn_file = get(".dropper_btn_file");

	eve(btn_file, dropFileHeandler, "change");
	eve(window, onloadHeandler, "load");

	function dropFileHeandler() {
		// Read files on event drop
		const files = this.files;
		files && readFiles({ files });
	}

	function onloadHeandler() {
		// Add Storage files on page
		const StorAll = getStorAll();
		StorAll.map((name) => {
			const file = { name: name };
			addFile({ file });
		});
	}
})();
