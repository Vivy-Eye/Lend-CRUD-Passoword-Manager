"use strict";

/**
 * getSaveTable({ file })
 * get Data from files and save in storage
 */
function readFiles({ files }) {
  const g = "Files";
  console.group(g || "Files");

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    file ? console.log(file) : console.error(file);

    file && readSaveFile({ file });
  }

  console.groupEnd(g || "Files");
}
