"use strict";

// (() => {
//   const inputs = {};
//   [
//     "PasswordLength",
//     "IncludeSymbols",
//     "IncludeNumbers",
//     "IncludeLowercaseCharacters",
//     "IncludeUppercaseCharacters",
//     "ExcludeSimilarCharacters",
//     "ExcludeAmbiguousCharacters",
//   ].forEach((input) => {
//     inputs[input] = document.getElementById(input);
//     document
//       .getElementById(input)
//       .addEventListener("change", makeInsertPassword, false);
//   });
// })()

//   function makeInsertPassword() {
//     let symbols ="";

//     inputs.IncludeSymbols.checked ? (symbols += "@#$%!№?*_+=") : false;
//     inputs.IncludeNumbers.checked ? (symbols += "0123456789") : false;
//     inputs.IncludeLowercaseCharacters.checked
//       ? (symbols += "abcdefghijklmnopqrstuvwxyz")
//       : false;
//     inputs.IncludeUppercaseCharacters.checked
//       ? (symbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//       : false;
//     inputs.ExcludeSimilarCharacters.checked ? (symbols += "il1Lo0O") : false;
//     inputs.ExcludeAmbiguousCharacters.checked
//       ? (symbols += "{}[]()/~,;:.>")
//       : false;
//   }

//   let outputText = "";
//   for (let i = 0; i < inputs.PasswordLength.value; i++) {
//     outputText += symbols.charAt(Math.floor(Math.random() * symbols.length));
//   }

//   document.querySelector("#random__output").value = outputText;

// })();

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=

[
  "PasswordLength",
  "IncludeSymbols",
  "IncludeNumbers",
  "IncludeLowercaseCharacters",
  "IncludeUppercaseCharacters",
  "ExcludeSimilarCharacters",
  "ExcludeAmbiguousCharacters",
].forEach((input) =>
  document
    .getElementById(input)
    .addEventListener("change", getPassword, false)
);

function makeInsertPassword() {
  const output = document.querySelector("#random__output");
}

function getPassword(password_length) {
  const btns = {};
  [
    "PasswordLength",
    "IncludeSymbols",
    "IncludeNumbers",
    "IncludeLowercaseCharacters",
    "IncludeUppercaseCharacters",
    "ExcludeSimilarCharacters",
    "ExcludeAmbiguousCharacters",
  ].forEach((input) => {
    btns[input] = document.getElementById(input);
    document
      .getElementById(input)
      .addEventListener("change", makeInsertPassword, false);
  });

  const IncludeSymbols = "@#$%!№?*_+=";
  const IncludeNumbers = "0123456789";
  const LowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const UppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const SimilarCharacters = "il1Lo0O";
  const AmbiguousCharacters = "{}[]()/~,;:.>";

  const random = (i) => Math.round(Math.random() * i);

  const password = "";

  for (let i = 0; i < password_length; i++) {
    // if ()
    password += IncludeSymbols[random(IncludeSymbols.length)];
    password += IncludeNumbers[random(IncludeNumbers.length)];
    password += LowercaseCharacters[random(LowercaseCharacters.length)];
    password += UppercaseCharacters[random(UppercaseCharacters.length)];
    password += SimilarCharacters[random(SimilarCharacters.length)];
    password += AmbiguousCharacters[random(AmbiguousCharacters.length)];
  }

  return password;
}
