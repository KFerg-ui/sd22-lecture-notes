let phrase = "all dogs are good dogs";

function isVowel(character) {
  return ["a", "e", "i", "o", "u", "y"].includes(character);
}

function uppercaseVowels(character) {
  return character.toUpperCase();
}

//*OLD WAY, no chain
let characters = phrase.split("");
let upperVowels = characters.map(uppercaseVowels);
let newString = upperVowels.join("");

console.log(newString);

//*NEW WAY, as chain
let result = phrase.split("").map(uppercaseVowels).join("");
console.log(result);

let onlyVowels = phrase.split("").filter(isVowel).map(uppercaseVowels).join("");
console.log(onlyVowels);
//* lodash.com - library of methods
//based on underscore.js, but that one is not great

//* BREAK CODE INTO SMALL PIECES to make it work...
