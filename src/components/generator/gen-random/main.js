"use strict";

const inputs_genrsRandom = document.querySelectorAll(
  ".gen-random__i-settings"
).forEach((input) => {
  input.addEventListener("change", () => {
    createInsRandPass();
  });
});

function createInsRandPass() {
  const input_result = document.querySelector(".gen-random__output");
  const inputs = {};
  [
    "PasswordLength",
    "IncludeSymbols",
    "IncludeNumbers",
    "IncludeLowercaseCharacters",
    "IncludeUppercaseCharacters",
    "ExcludeSimilarCharacters",
    "ExcludeAmbiguousCharacters",
  ].forEach((input) => (inputs[input] = document.getElementById(input)));
  let symbols = "";

  inputs.IncludeSymbols.checked ? (symbols += "@#$%!№?*_+=") : false;
  inputs.IncludeNumbers.checked ? (symbols += "0123456789") : false;
  inputs.IncludeLowercaseCharacters.checked ? (symbols += "abcdefghijklmnopqrstuvwxyz") : false;
  inputs.IncludeUppercaseCharacters.checked ? (symbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ") : false;
  inputs.ExcludeSimilarCharacters.checked ? (symbols += "il1Lo0O") : false;
  inputs.ExcludeAmbiguousCharacters.checked ? (symbols += "{}[]()/~,;:.>") : false;

  let result = "";
  for (let i = 0; i < inputs.PasswordLength.value; i++) {
    result += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  input_result.value = result;
}

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=

// function createInsMD5Pass() {
//   const input_result = document.getElementById("password-result");
//   const input_kayWord = document.getElementById("md5-kay-word");

//   input_result.value = MD5(input_kayWord.value);
// }
