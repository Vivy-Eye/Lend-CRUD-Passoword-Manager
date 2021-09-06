"use strict";

function makeFileUrl(text) {
	// ev.preventDefault();

	const //
		// database = testDB,
		file_text = JSON.stringify(text),
		mime_type = "application/json" || "text/plain",
		file = new Blob([file_text], { type: mime_type }),
		file_url = URL.createObjectURL(file);

	URL.revokeObjectURL(File);
	return file_url;
}
