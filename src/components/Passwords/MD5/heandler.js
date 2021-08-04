"use strict";

((input, output) => {
  input.addEventListener(
    "change",
    function () {
      output.value = MD5(this.value);
    },
    false
  );
})(
  document.getElementById("md5__text"),
  document.getElementById("md5__output")
);
