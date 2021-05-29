"use strict";

const gen_md5 = generator.querySelector(".gen-md5");
const gen_md5_in = gen_md5.querySelector("#gen-md5__i-in");
const gen_md5_out = gen_md5.querySelector("#gen-md5__i-out");

gen_md5_in.addEventListener("keyup", generateMD5, false);

function generateMD5() {
  gen_md5_out.value = MD5(this.value)
}