"use strict";

/**
 * readSaveFile({ file })
 */
function readSaveFile({ file }) {
	const r = new FileReader();
	r.readAsText(file);

	r.onload = () => {
		const string = r.result;
		const name = file.name;
		string && addStor({ name, string });
		string && addFile({ file });
	};

	r.onerror = () => console.error(r.error);
}
